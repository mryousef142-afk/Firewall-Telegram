import { prisma } from "./client.js";
import { logger } from "../utils/logger.js";
import type { PromoSlideRecord } from "../../shared/promo.js";

export async function fetchPanelSettingsFromDb() {
  const record = await prisma.botSetting.findUnique({
    where: { key: "panel_settings" },
  });
  if (!record) {
    return null;
  }
  if (record.value && typeof record.value === "object") {
    return record.value as Record<string, unknown>;
  }
  return null;
}

export async function fetchPanelAdminsFromDb(): Promise<string[]> {
  const users = await prisma.user.findMany({
    where: {
      role: {
        in: ["owner", "admin", "panel_admin"],
      },
    },
    select: {
      telegramId: true,
    },
  });
  return users.map((user) => user.telegramId);
}

export async function fetchGroupsFromDb() {
  const groups = await prisma.group.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return groups.map((group) => ({
    chatId: group.telegramChatId,
    title: group.title,
    creditBalance: Number(group.creditBalance ?? 0),
    createdAt: group.createdAt.toISOString(),
    updatedAt: group.updatedAt.toISOString(),
    lastAdjustmentNote: null,
    membersCount: 0,
    inviteLink: group.inviteLink,
    photoUrl: null,
    managed: true,
  }));
}

export async function fetchStarsWalletsFromDb() {
  const wallets = await prisma.starsWallet.findMany({
    include: {
      group: true,
      owner: true,
    },
  });

  return wallets.map((wallet) => ({
    id: wallet.id,
    balance: wallet.balance,
    currency: wallet.currency,
    group:
      wallet.group && wallet.group.telegramChatId
        ? {
            chatId: wallet.group.telegramChatId,
            title: wallet.group.title,
          }
        : null,
    owner:
      wallet.owner && wallet.owner.telegramId
        ? {
            telegramId: wallet.owner.telegramId,
            displayName: wallet.owner.displayName ?? null,
          }
        : null,
  }));
}

export async function fetchOwnerWalletBalance(ownerTelegramId: string): Promise<number | null> {
  const owner = await prisma.user.findUnique({
    where: { telegramId: ownerTelegramId },
    include: {
      wallet: true,
    },
  });

  return owner?.wallet?.balance ?? null;
}

export async function fetchOwnerWalletDetails(ownerTelegramId: string, limit = 50) {
  const owner = await prisma.user.findUnique({
    where: { telegramId: ownerTelegramId },
    include: {
      wallet: {
        include: {
          transactions: {
            orderBy: {
              createdAt: "desc",
            },
            take: limit,
            include: {
              group: {
                select: {
                  telegramChatId: true,
                  title: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!owner || !owner.wallet) {
    return null;
  }

  const wallet = owner.wallet;
  return {
    id: wallet.id,
    balance: wallet.balance,
    currency: wallet.currency,
    transactions: wallet.transactions.map((transaction) => ({
      id: transaction.id,
      amount: transaction.amount,
      status: transaction.status,
      type: transaction.type,
      planId:
        transaction.metadata && typeof transaction.metadata === "object" && "planId" in transaction.metadata
          ? (transaction.metadata as Record<string, unknown>).planId ?? null
          : null,
      gifted:
        transaction.metadata && typeof transaction.metadata === "object" && "gifted" in transaction.metadata
          ? Boolean((transaction.metadata as Record<string, unknown>).gifted)
          : false,
      planLabel:
        transaction.metadata && typeof transaction.metadata === "object" && "planLabel" in transaction.metadata
          ? ((transaction.metadata as Record<string, unknown>).planLabel as string | null)
          : null,
      planDays:
        transaction.metadata && typeof transaction.metadata === "object" && "planDays" in transaction.metadata
          ? Number((transaction.metadata as Record<string, unknown>).planDays ?? 0)
          : null,
      planPrice:
        transaction.metadata && typeof transaction.metadata === "object" && "planPrice" in transaction.metadata
          ? Number((transaction.metadata as Record<string, unknown>).planPrice ?? 0)
          : null,
      groupTitle:
        transaction.metadata && typeof transaction.metadata === "object" && "groupTitle" in transaction.metadata
          ? ((transaction.metadata as Record<string, unknown>).groupTitle as string | null)
          : transaction.group?.title ?? null,
      groupId: transaction.group?.telegramChatId ?? null,
      createdAt: transaction.createdAt.toISOString(),
      completedAt: transaction.completedAt ? transaction.completedAt.toISOString() : null,
      externalId: transaction.externalId ?? null,
      invoiceLink:
        transaction.metadata && typeof transaction.metadata === "object" && "invoiceLink" in transaction.metadata
          ? ((transaction.metadata as Record<string, unknown>).invoiceLink as string | null)
          : null,
    })),
  };
}

const SLIDE_ANALYTICS_LOOKBACK_DAYS = 30;

export async function fetchPromoSlidesFromDb(): Promise<PromoSlideRecord[]> {
  logger.debug("loading promo slides from database");
  const now = new Date();
  const lookbackCutoff = new Date(now.getTime() - SLIDE_ANALYTICS_LOOKBACK_DAYS * 86_400_000);

  const slides = await prisma.promoSlide.findMany({
    orderBy: [
      { position: "asc" },
      { createdAt: "asc" },
    ],
    include: {
      analyticsBuckets: {
        where: {
          bucket: {
            gte: lookbackCutoff,
          },
        },
      },
    },
  });

  return slides.map((slide) => {
    const analyticsTotals = slide.analyticsBuckets.reduce(
      (acc, bucket) => {
        acc.impressions += bucket.impressions ?? 0;
        acc.clicks += bucket.clicks ?? 0;
        acc.totalViewDurationMs += Number(bucket.totalViewDurationMs ?? BigInt(0));
        acc.bounces += bucket.bounces ?? 0;
        return acc;
      },
      {
        impressions: 0,
        clicks: 0,
        totalViewDurationMs: 0,
        bounces: 0,
      },
    );

    const ctr = analyticsTotals.impressions > 0 ? analyticsTotals.clicks / analyticsTotals.impressions : 0;
    const avgTime =
      analyticsTotals.impressions > 0 ? analyticsTotals.totalViewDurationMs / analyticsTotals.impressions : 0;
    const bounceRate =
      analyticsTotals.impressions > 0 ? analyticsTotals.bounces / analyticsTotals.impressions : 0;

    return {
      id: slide.id,
      title: slide.title,
      subtitle: slide.subtitle,
      description: slide.description,
      imageUrl: slide.imageUrl,
      thumbnailUrl: slide.thumbnailUrl,
      thumbnailStorageKey: slide.thumbnailStorageKey ?? null,
      storageKey: slide.storageKey,
      originalFileId: slide.originalFileId,
      contentType: slide.contentType,
      fileSize: slide.fileSize,
      width: slide.width,
      height: slide.height,
      checksum: slide.checksum,
      linkUrl: slide.linkUrl,
      position: slide.position,
      accentColor: slide.accentColor,
      ctaLabel: slide.ctaLabel,
      ctaLink: slide.ctaLink,
      active: slide.active,
      startsAt: slide.startsAt ? slide.startsAt.toISOString() : null,
      endsAt: slide.endsAt ? slide.endsAt.toISOString() : null,
      abTestGroupId: slide.abTestGroupId,
      variant: slide.variant,
      views: slide.views,
      clicks: slide.clicks,
      totalViewDurationMs: Number(slide.totalViewDurationMs ?? BigInt(0)),
      bounces: slide.bounces,
      metadata: (slide.metadata as Record<string, unknown>) ?? {},
      createdBy: slide.createdBy,
      createdAt: slide.createdAt.toISOString(),
      updatedAt: slide.updatedAt.toISOString(),
      analytics: {
        impressions: analyticsTotals.impressions,
        clicks: analyticsTotals.clicks,
        ctr: Number(ctr.toFixed(4)),
        avgTimeSpent: Number((avgTime / 1000).toFixed(2)),
        bounceRate: Number(bounceRate.toFixed(4)),
      },
    };
  });
}

export async function fetchPanelBansFromDb(): Promise<string[]> {
  const bans = await prisma.panelBan.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return bans.map((ban) => ban.telegramId);
}

export async function listModerationActionsFromDb(chatId: string, limit = 100) {
  const group = await prisma.group.findUnique({
    where: { telegramChatId: chatId },
    select: { id: true },
  });
  if (!group) {
    return [];
  }

  const actions = await prisma.moderationAction.findMany({
    where: { groupId: group.id },
    orderBy: { createdAt: "desc" },
    take: limit,
  });

  return actions.map((action) => ({
    id: action.id,
    userId: action.userId,
    actorId: action.actorId,
    action: action.action,
    severity: action.severity,
    reason: action.reason,
    metadata: action.metadata,
    createdAt: action.createdAt.toISOString(),
  }));
}

export async function listMembershipEventsFromDb(chatId: string, limit = 100) {
  const group = await prisma.group.findUnique({
    where: { telegramChatId: chatId },
    select: { id: true },
  });
  if (!group) {
    return [];
  }

  const events = await prisma.membershipEvent.findMany({
    where: { groupId: group.id },
    orderBy: { createdAt: "desc" },
    take: limit,
  });

  return events.map((event) => ({
    id: event.id,
    userId: event.userId,
    event: event.event,
    payload: event.payload,
    createdAt: event.createdAt.toISOString(),
  }));
}
