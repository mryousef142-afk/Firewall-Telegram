import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { openLink } from "@telegram-apps/sdk-react";
import { Avatar, Button, Card, Snackbar, Text, Title } from "@telegram-apps/telegram-ui";

import { useOwnerProfile } from "@/features/dashboard/useOwnerProfile.ts";
import { dashboardConfig } from "@/config/dashboard.ts";
import { verifyChannelMembership } from "@/features/missions/api.ts";

import styles from "./MissionsPage.module.css";

type MissionCategory = "daily" | "weekly" | "monthly" | "general";

type MissionIconKey =
  | "check"
  | "renew"
  | "settings"
  | "chat"
  | "target"
  | "gift"
  | "invite"
  | "shield"
  | "uptime"
  | "stars"
  | "brain"
  | "trophy"
  | "link"
  | "review"
  | "groups"
  | "puzzle"
  | "analytics"
  | "broadcast"
  | "security"
  | "insight";

type MissionVerification =
  | {
      kind: "telegram-channel";
      channelUsername: string;
    };

type Mission = {
  id: string;
  title: string;
  description: string;
  xp: number;
  icon: MissionIconKey;
  ctaLabel?: string;
  ctaLink?: string;
  verification?: MissionVerification;
};

type Reward = {
  id: string;
  title: string;
  cost: number;
  description: string;
};

type DailyTaskChannelMission = {
  channelLink: string;
  buttonLabel: string;
  description: string;
  xp: number;
};

type CompletionState = Record<MissionCategory, Set<string>>;

type ReferralStats = {
  tracked: number;
  activated: number;
  xpEarned: number;
};

type ReferralSignal = {
  referralId?: string;
  reward?: number;
};


const LEVEL_THRESHOLDS = [0, 250, 600, 1050, 1600, 2200, 2850, 3550, 4300, 5100, 5950, 6850];
const DAILY_WHEEL_ID = "daily-wheel";
const DAILY_WHEEL_MIN_REWARD = 1;
const DAILY_WHEEL_MAX_REWARD = 20;
const FIREWALL_CHANNEL_USERNAME = "firewall";
const FIREWALL_CHANNEL_URL = "https://t.me/firewall";

function extractChannelUsername(link: string): string | null {
  const trimmed = link.trim();
  if (!trimmed) {
    return null;
  }

  if (trimmed.startsWith("@")) {
    return trimmed.slice(1).toLowerCase();
  }

  try {
    const candidateUrl = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
    const url = new URL(candidateUrl);
    if (!url.hostname.endsWith("t.me")) {
      return null;
    }
    const pathname = url.pathname.replace(/^\/+/, "");
    if (!pathname || pathname.startsWith("+")) {
      return null;
    }
    const base = pathname.split("/")[0] ?? null;
    return base ? base.toLowerCase() : null;
  } catch {
    if (trimmed.startsWith("t.me/")) {
      const candidate = trimmed.slice(5).replace(/^\/+/, "");
      if (candidate && !candidate.startsWith("+")) {
        const base = candidate.split("/")[0] ?? null;
        return base ? base.toLowerCase() : null;
      }
    }
  }

  return null;
}

const MISSIONS: Record<MissionCategory, Mission[]> = {
  daily: [
    {
      id: "check-in",
      title: "Check in today",
      description: "Open Firewall once to refresh statistics and keep your streak alive.",
      xp: 20,
      icon: "check",
    },
    {
      id: DAILY_WHEEL_ID,
      title: "Spin the daily wheel",
      description: "Take your chance on the XP wheel and earn between 1 and 20 bonus XP.",
      xp: DAILY_WHEEL_MAX_REWARD,
      icon: "trophy",
    },
  ],
  weekly: [
    {
      id: "renew-weekly",
      title: "Renew one group credit",
      description: "Extend uptime for any managed group by at least one week.",
      xp: 70,
      icon: "renew",
    },
    {
      id: "complete-daily-3",
      title: "Reach a 3-day streak",
      description: "Hit a three-day daily streak (or higher) during the current week.",
      xp: 70,
      icon: "check",
    },
    {
      id: "weekly-referral-activated",
      title: "Activate one referral",
      description: "Bring at least one new team that tops up their group and activates the referral.",
      xp: 70,
      icon: "invite",
    },
    {
      id: "rookie-badge-progress",
      title: "Wear the Rookie badge",
      description: "Equip the 🌟 Rookie badge in the marketplace to lock in your weekly reward.",
      xp: 70,
      icon: "trophy",
    },
  ],
  monthly: [
    {
      id: "streak-day-6",
      title: "Hold a 6-day streak",
      description: "Keep your daily streak alive for six consecutive days (or more) this month.",
      xp: 180,
      icon: "brain",
    },
    {
      id: "monthly-referrals",
      title: "Activate three referrals",
      description: "Bring three new teams that finish their first Stars top-up during the month.",
      xp: 180,
      icon: "invite",
    },
    {
      id: "monthly-giveaway",
      title: "Host a giveaway",
      description: "Launch a giveaway campaign to reward your community this month.",
      xp: 180,
      icon: "gift",
    },
    {
      id: "master-badge-progress",
      title: "Wear the Master badge",
      description: "Equip the 🎯 Master badge from the marketplace to collect this reward.",
      xp: 180,
      icon: "trophy",
    },
  ],
  general: [
    {
      id: "join-channel",
      title: "Join the official Firewall channel",
      description: "Subscribe to release notes, incident alerts, and roadmap votes.",
      xp: 30,
      icon: "link",
      ctaLabel: "Open channel",
      ctaLink: FIREWALL_CHANNEL_URL,
      verification: {
        kind: "telegram-channel",
        channelUsername: FIREWALL_CHANNEL_USERNAME,
      },
    },
    {
      id: "add-group",
      title: "Add Firewall to a new group",
      description: "Protect a fresh community that trusts your moderation style.",
      xp: 30,
      icon: "groups",
    },
    {
      id: "badge-rookie",
      title: "Equip the Rookie badge",
      description: "Wear the 🌟 Rookie badge to celebrate your Firewall debut.",
      xp: 30,
      icon: "trophy",
    },
    {
      id: "badge-active",
      title: "Equip the Active badge",
      description: "Show your consistent dedication by wearing the ⚡ Active badge.",
      xp: 40,
      icon: "trophy",
    },
    {
      id: "badge-master",
      title: "Equip the Master badge",
      description: "Display the 🎯 Master badge to inspire your moderator crew.",
      xp: 50,
      icon: "trophy",
    },
    {
      id: "badge-elite",
      title: "Equip the Elite badge",
      description: "Flex your 💎 Elite status to motivate the entire community.",
      xp: 60,
      icon: "trophy",
    },
    {
      id: "badge-legend",
      title: "Equip the Legend badge",
      description: "Claim victory by wearing the 👑 Legend badge in your profile.",
      xp: 80,
      icon: "trophy",
    },
    {
      id: "referral-1",
      title: "Activate one referral",
      description: "Bring a single team that completes their first Stars top-up.",
      xp: 40,
      icon: "invite",
    },
    {
      id: "referral-3",
      title: "Activate three referrals",
      description: "Grow the network with three newly activated referrals.",
      xp: 70,
      icon: "invite",
    },
    {
      id: "referral-6",
      title: "Activate six referrals",
      description: "Keep the momentum going by activating six referrals overall.",
      xp: 120,
      icon: "invite",
    },
    {
      id: "referral-9",
      title: "Activate nine referrals",
      description: "Secure nine activated referrals to earn this milestone reward.",
      xp: 180,
      icon: "invite",
    },
    {
      id: "referral-30",
      title: "Activate thirty referrals",
      description: "Lead the leaderboard by activating thirty referrals in total.",
      xp: 400,
      icon: "invite",
    },
  ],
};

const REWARDS: Reward[] = [
  {
    id: "reward-uptime-7",
    title: "7-day uptime credit",
    cost: 800,
    description: "Extend any protected group by seven days.",
  },
  {
    id: "reward-uptime-14",
    title: "14-day uptime bundle",
    cost: 1400,
    description: "Lock in two full weeks of Firewall coverage.",
  },
  {
    id: "reward-uptime-30",
    title: "30-day uptime bundle",
    cost: 2500,
    description: "Secure a full month of uninterrupted protection.",
  },
  {
    id: "badge-rookie",
    title: "Rookie badge",
    cost: 200,
    description: "Equip the Rookie flair to mark your Firewall debut.",
  },
  {
    id: "badge-active",
    title: "Active badge",
    cost: 500,
    description: "Show you're consistently on duty with the Active badge.",
  },
  {
    id: "badge-master",
    title: "Master badge",
    cost: 1000,
    description: "Display the Master badge to celebrate serious grind.",
  },
  {
    id: "badge-elite",
    title: "Elite badge",
    cost: 2000,
    description: "Flex Elite status after weeks of strategic play.",
  },
  {
    id: "badge-legend",
    title: "Legend badge",
    cost: 5000,
    description: "Claim the ultimate Legend badge and lead the charts.",
  },
];

const REFERRAL_XP = 100;

const CATEGORY_BONUSES: Partial<Record<MissionCategory, { xp: number; label: string }>> = {
  daily: { xp: 150, label: "Daily streak bonus" },
  weekly: { xp: 400, label: "Weekly completion bonus" },
  monthly: { xp: 1000, label: "Monthly mastery bonus" },
};

const ICON_PALETTE: Record<MissionIconKey, { primary: string; secondary: string }> = {
  check: { primary: "var(--app-color-accent-cyan)", secondary: "rgba(30, 162, 255, 0.28)" },
  renew: { primary: "#38bdf8", secondary: "rgba(56, 189, 248, 0.28)" },
  settings: { primary: "#c084fc", secondary: "rgba(192, 132, 252, 0.24)" },
  chat: { primary: "#f97316", secondary: "rgba(249, 115, 22, 0.24)" },
  target: { primary: "#facc15", secondary: "rgba(250, 204, 21, 0.24)" },
  gift: { primary: "#f472b6", secondary: "rgba(244, 114, 182, 0.24)" },
  invite: { primary: "#38ef7d", secondary: "rgba(56, 239, 125, 0.24)" },
  shield: { primary: "#5eead4", secondary: "rgba(94, 234, 212, 0.24)" },
  uptime: { primary: "#60a5fa", secondary: "rgba(96, 165, 250, 0.24)" },
  stars: { primary: "#fbbf24", secondary: "rgba(251, 191, 36, 0.24)" },
  brain: { primary: "#a855f7", secondary: "rgba(168, 85, 247, 0.24)" },
  trophy: { primary: "#facc43", secondary: "rgba(250, 204, 67, 0.24)" },
  link: { primary: "#0ea5e9", secondary: "rgba(14, 165, 233, 0.24)" },
  review: { primary: "#f97316", secondary: "rgba(249, 115, 22, 0.24)" },
  groups: { primary: "#38bdf8", secondary: "rgba(56, 189, 248, 0.24)" },
  puzzle: { primary: "#f472b6", secondary: "rgba(244, 114, 182, 0.24)" },
  analytics: { primary: "#60a5fa", secondary: "rgba(96, 165, 250, 0.24)" },
  broadcast: { primary: "#fb7185", secondary: "rgba(251, 113, 133, 0.24)" },
  security: { primary: "#22d3ee", secondary: "rgba(34, 211, 238, 0.24)" },
  insight: { primary: "#fde047", secondary: "rgba(253, 224, 71, 0.24)" },
};

const DEFAULT_ICON_COLORS = {
  primary: "var(--app-color-accent-cyan)",
  secondary: "rgba(30, 162, 255, 0.28)",
};

const TEXT = {
  title: "Firewall Missions",
  subtitle: "Complete missions, grow your rank, and keep every group thriving.",
  tabs: [
    { key: "daily" as const, label: "Daily" },
    { key: "weekly" as const, label: "Weekly" },
    { key: "monthly" as const, label: "Monthly" },
    { key: "general" as const, label: "General" },
  ],
  streakLabel: (days: number) => `${days} day streak`,
  multiplierHint: "XP booster",
  dailyBonusHint: "Finish every task to claim the +150 XP streak bonus.",
  weeklyBonusHint: "Clear every challenge to trigger the +400 XP weekly payout.",
  monthlyBonusHint: "Lock in all monthly goals to collect the +1000 XP mastery bonus.",
  openStore: "Open XP store",
  copyReferral: "Copy invite link",
  storeTitle: "XP Marketplace",
  storeSubtitle: "Spend your XP on uptime bundles and exclusive badges.",
  storeRedeemLabel: "Redeem",
  storeRedeem: (title: string) => `Redeemed ${title}!`,
  storeInsufficient: "Not enough XP to redeem that reward yet.",
  referralTitle: "Referral booster",
  referralSubtitle: "Share your invite link. XP unlocks when teammates top up their first group with Stars.",
  referralCopied: "Referral link copied to clipboard.",
  referralLogged: (xp: number) => `+${xp} XP from an activated referral.`,
  referralTracked: (count: number) => `${count.toLocaleString()} referral${count === 1 ? "" : "s"} joined`,
  referralActivated: (count: number) => `${count.toLocaleString()} activated`,
  referralPending: (count: number) => `${count.toLocaleString()} pending activation`,
  referralXpEarned: (xp: number) => `XP earned: ${xp.toLocaleString()}`,
  referralHint: "Referrals grant XP only after their first Stars top-up.",
  markComplete: "Mark complete",
  logged: "Logged",
  toastAlreadyLogged: "Mission already logged for today.",
  toastReward: (xpEarned: number, title: string) => `+${xpEarned} XP - ${title}`,
  toastWithBonus: (xpEarned: number, title: string, bonusLabel: string, bonusXp: number) =>
    `+${xpEarned} XP - ${title} | Bonus +${bonusXp} XP (${bonusLabel})`,
  toastLevelUp: (level: number) => `Level up! You reached level ${level}.`,
  verify: "Verify",
  verifyInProgress: "Verifying...",
  channelVerifyFailed: "Please join the channel before claiming this reward.",
  channelVerifyError: "We couldn't verify your channel membership. Try again shortly.",
};

function formatMissionXpLabel(mission: Mission): string {
  if (mission.id === DAILY_WHEEL_ID) {
    return `+${DAILY_WHEEL_MIN_REWARD}-${DAILY_WHEEL_MAX_REWARD} XP`;
  }
  return `+${mission.xp} XP`;
}

function computeLevel(xp: number) {
  let level = 1;
  let nextThreshold = LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];

  for (let index = 0; index < LEVEL_THRESHOLDS.length; index += 1) {
    const threshold = LEVEL_THRESHOLDS[index];
    const next = LEVEL_THRESHOLDS[index + 1];
    if (xp >= threshold) {
      level = index + 1;
      if (typeof next === "number") {
        nextThreshold = next;
      } else {
        nextThreshold = threshold;
      }
    }
  }

  const previousThreshold = LEVEL_THRESHOLDS[Math.max(0, level - 1)];
  const delta = nextThreshold - previousThreshold || 1;
  const progress = Math.min(1, Math.max(0, (xp - previousThreshold) / delta));

  return {
    level,
    previousThreshold,
    nextThreshold,
    progress,
    hasNext: nextThreshold > xp,
  };
}

export function MissionsPage() {
  const { displayName, username } = useOwnerProfile();
  const [activeTab, setActiveTab] = useState<MissionCategory>("daily");
  const [xp, setXp] = useState(2450);
  const [streak] = useState(7);
  const [seasonMultiplier] = useState(1.4);
  const [snackbar, setSnackbar] = useState<string | null>(null);
  const [verifyingMissionId, setVerifyingMissionId] = useState<string | null>(null);
  const [completion, setCompletion] = useState<CompletionState>(() => ({
    daily: new Set<string>(),
    weekly: new Set<string>(),
    monthly: new Set<string>(),
    general: new Set<string>(),
  }));
  const [dailyTaskChannel, setDailyTaskChannel] = useState<DailyTaskChannelMission | null>(null);
  const [referralStats, setReferralStats] = useState<ReferralStats>({ tracked: 0, activated: 0, xpEarned: 0 });
  const [redeemedRewards, setRedeemedRewards] = useState<Record<string, number>>({});
  const storeSectionRef = useRef<HTMLDivElement | null>(null);
  const trackedReferrals = useRef<Set<string>>(new Set());
  const activatedReferrals = useRef<Set<string>>(new Set());

  const levelInfo = useMemo(() => computeLevel(xp), [xp]);
  const missionsByCategory = useMemo(() => {
    if (!dailyTaskChannel) {
      return MISSIONS;
    }

    const sanitizedXp = Math.max(1, Math.round(dailyTaskChannel.xp));
    const channelUsername = extractChannelUsername(dailyTaskChannel.channelLink);
    const mission: Mission = {
      id: "daily-channel-mission",
      title: dailyTaskChannel.buttonLabel,
      description: `${dailyTaskChannel.description}
${dailyTaskChannel.channelLink}`,
      xp: sanitizedXp,
      icon: "link",
      ctaLabel: "Open channel",
      ctaLink: dailyTaskChannel.channelLink,
      verification: channelUsername
        ? {
            kind: "telegram-channel",
            channelUsername,
          }
        : undefined,
    };

    const baseDaily = MISSIONS.daily.filter((item) => item.id !== mission.id);
    return {
      ...MISSIONS,
      daily: [mission, ...baseDaily],
    };
  }, [dailyTaskChannel]);
  const missions = useMemo(() => missionsByCategory[activeTab], [missionsByCategory, activeTab]);
  const activeCompletion = completion[activeTab];

  const weeklyProgress = completion.weekly.size / missionsByCategory.weekly.length;
  const monthlyProgress = completion.monthly.size / missionsByCategory.monthly.length;
  const generalProgress = completion.general.size / missionsByCategory.general.length;

  const referralLink = useMemo(() => {
    const base = dashboardConfig.inviteLink ?? "https://t.me/FirewallBot?start=fw";
    const codeSource = (username ?? displayName ?? "commander").toLowerCase();
    const sanitized = codeSource.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const separator = base.includes("?") ? "&" : "?";
    return `${base}${separator}ref=${sanitized || "commander"}`;
  }, [displayName, username]);
  const referralPending = Math.max(0, referralStats.tracked - referralStats.activated);

  const handleCopyReferral = useCallback(async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(referralLink);
        setSnackbar(TEXT.referralCopied);
      } else {
        window.open(referralLink, "_blank");
      }
    } catch (error) {
      console.warn("[missions] copy referral link failed", error);
      window.open(referralLink, "_blank");
    }
  }, [referralLink]);

  const handleOpenStore = useCallback(() => {
    storeSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleRedeemReward = useCallback(
    (reward: Reward) => {
      if (xp < reward.cost) {
        setSnackbar(TEXT.storeInsufficient);
        return;
      }

      setXp((previous) => previous - reward.cost);
      setRedeemedRewards((previous) => ({ ...previous, [reward.id]: (previous[reward.id] ?? 0) + 1 }));
      setSnackbar(TEXT.storeRedeem(reward.title));
    },
    [xp],
  );

  useEffect(() => {
    let cancelled = false;

    const loadDailyTask = async () => {
      try {
        const response = await fetch("/daily-task.json", { cache: "no-store" });
        if (!response.ok) {
          if (!cancelled) {
            setDailyTaskChannel(null);
          }
          return;
        }
        const data = (await response.json()) as Partial<DailyTaskChannelMission> & { updatedAt?: string };
        if (cancelled) {
          return;
        }
        if (typeof data.channelLink === "string" && typeof data.buttonLabel === "string" && typeof data.description === "string" && typeof data.xp === "number" && Number.isFinite(data.xp) && data.xp > 0) {
          const channelLink = data.channelLink.trim();
          const buttonLabel = data.buttonLabel.trim();
          const description = data.description.trim();
          const xpReward = Math.max(1, Math.round(data.xp));
          if (channelLink && buttonLabel && description) {
            setDailyTaskChannel({
              channelLink,
              buttonLabel,
              description,
              xp: xpReward,
            });
          } else {
            setDailyTaskChannel(null);
          }
        } else {
          setDailyTaskChannel(null);
        }
      } catch (error) {
        console.warn("[missions] failed to load daily task config", error);
        if (!cancelled) {
          setDailyTaskChannel(null);
        }
      }
    };

    void loadDailyTask();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const ensureId = (prefix: string, id?: string) => id?.trim() && id.trim().length > 0 ? id.trim() : `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`;

    const handleTracked = (event: Event) => {
      const custom = event as CustomEvent<ReferralSignal>;
      const detail = custom.detail ?? {};
      const referralId = ensureId("ref", detail.referralId);
      if (trackedReferrals.current.has(referralId)) {
        return;
      }
      trackedReferrals.current.add(referralId);
      setReferralStats((prev) => ({
        tracked: trackedReferrals.current.size,
        activated: prev.activated,
        xpEarned: prev.xpEarned,
      }));
    };

    const handleActivated = (event: Event) => {
      const custom = event as CustomEvent<ReferralSignal>;
      const detail = custom.detail ?? {};
      const referralId = ensureId("activation", detail.referralId);
      if (activatedReferrals.current.has(referralId)) {
        return;
      }
      activatedReferrals.current.add(referralId);
      trackedReferrals.current.add(referralId);
      const reward = typeof detail.reward === "number" && Number.isFinite(detail.reward) ? detail.reward : REFERRAL_XP;
      setReferralStats((prev) => ({
        tracked: trackedReferrals.current.size,
        activated: activatedReferrals.current.size,
        xpEarned: prev.xpEarned + reward,
      }));
      setXp((prev) => prev + reward);
      setSnackbar(TEXT.referralLogged(reward));
    };

    window.addEventListener("referral:tracked", handleTracked);
    window.addEventListener("referral:activated", handleActivated);

    return () => {
      window.removeEventListener("referral:tracked", handleTracked);
      window.removeEventListener("referral:activated", handleActivated);
    };
  }, [setSnackbar]);

  const verifyMissionRequirement = useCallback(
    async (mission: Mission) => {
      if (!mission.verification) {
        return true;
      }

      if (mission.verification.kind === "telegram-channel") {
        const username = mission.verification.channelUsername.trim();
        if (!username) {
          setSnackbar(TEXT.channelVerifyError);
          return false;
        }

        try {
          const isMember = await verifyChannelMembership(username);
          if (!isMember) {
            setSnackbar(TEXT.channelVerifyFailed);
          }
          return isMember;
        } catch (error) {
          console.error("[missions] channel verification failed", error);
          setSnackbar(TEXT.channelVerifyError);
          return false;
        }
      }

      return true;
    },
    [setSnackbar],
  );

  const handleMissionComplete = useCallback(
    async (category: MissionCategory, mission: Mission) => {
      if (completion[category].has(mission.id)) {
        setSnackbar(TEXT.toastAlreadyLogged);
        return;
      }

      const previousLevel = levelInfo.level;
      const completedCount = completion[category].size;
      const totalInCategory = missionsByCategory[category]?.length ?? 0;
      const bonusMeta = CATEGORY_BONUSES[category];

      let earnedXp = Number.isFinite(mission.xp) ? Math.max(0, Math.trunc(mission.xp)) : 0;
      if (mission.id === DAILY_WHEEL_ID) {
        earnedXp =
          Math.floor(Math.random() * (DAILY_WHEEL_MAX_REWARD - DAILY_WHEEL_MIN_REWARD + 1)) +
          DAILY_WHEEL_MIN_REWARD;
      }

      if (mission.verification) {
        setVerifyingMissionId(mission.id);
        try {
          const verified = await verifyMissionRequirement(mission);
          if (!verified) {
            return;
          }
        } finally {
          setVerifyingMissionId(null);
        }
      }

      const bonusXp =
        bonusMeta && totalInCategory > 0 && completedCount + 1 === totalInCategory ? bonusMeta.xp : 0;
      const nextXp = xp + earnedXp + bonusXp;
      const nextLevelInfo = computeLevel(nextXp);

      setCompletion((prev) => {
        const next: CompletionState = {
          ...prev,
          [category]: new Set(prev[category]),
        };
        next[category].add(mission.id);
        return next;
      });

      setXp(nextXp);
      if (nextLevelInfo.level > previousLevel) {
        setSnackbar(TEXT.toastLevelUp(nextLevelInfo.level));
        return;
      }
      if (bonusXp > 0 && bonusMeta) {
        setSnackbar(TEXT.toastWithBonus(earnedXp, mission.title, bonusMeta.label, bonusXp));
        return;
      }
      setSnackbar(TEXT.toastReward(earnedXp, mission.title));
    },
    [
      completion,
      levelInfo.level,
      missionsByCategory,
      verifyMissionRequirement,
      xp,
      setSnackbar,
    ],
  );

  return (
    <div className={styles.page} dir="ltr">
      <section className={styles.hero}>
        <div className={styles.heroHeader}>
          <div className={styles.heroProfile}>
            <Avatar size={96} acronym="CM" alt="Commander" />
            <div className={styles.heroMeta}>
              <span className={styles.heroLabel}>{TEXT.title}</span>
              <Title level="2" className={styles.heroTitle}>
                Level {levelInfo.level}
              </Title>
              <Text className={styles.heroSubtitle}>{TEXT.subtitle}</Text>
            </div>
          </div>
          <div className={styles.heroActions}>
            <Button mode="plain" size="s" onClick={handleOpenStore}>
              {TEXT.openStore}
            </Button>
            <Button mode="plain" size="s" onClick={handleCopyReferral}>
              {TEXT.copyReferral}
            </Button>
          </div>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.levelRow}>
            <Text weight="2">Total XP</Text>
            <Text weight="2">{xp.toLocaleString()}</Text>
          </div>
          <div className={styles.progressTrack}>
            <div className={styles.progressValue} style={{ width: `${levelInfo.progress * 100}%` }} />
          </div>
          <div className={styles.levelMeta}>
            <Text className={styles.levelProgress}>
              {levelInfo.hasNext
                ? `${(levelInfo.nextThreshold - xp).toLocaleString()} XP until level ${levelInfo.level + 1}`
                : "Maximum level reached for this season"}
            </Text>
            <div className={styles.chipRow}>
              <span className={styles.chip}>{TEXT.streakLabel(streak)}</span>
              <span className={styles.chip}>
                {TEXT.multiplierHint}: x{seasonMultiplier.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.quickStats}>
        <Card className={styles.statCard}>
          <Text weight="2" className={styles.statTitle}>
            Daily focus
          </Text>
          <Text className={styles.statValue}>
            {completion.daily.size}/{missionsByCategory.daily.length} done
          </Text>
          <Text className={styles.statHint}>{TEXT.dailyBonusHint}</Text>
        </Card>
        <Card className={styles.statCard}>
          <Text weight="2" className={styles.statTitle}>
            Weekly progress
          </Text>
          <div className={styles.statProgress}>
            <div className={styles.progressTrackSmall}>
              <div className={styles.progressValueSmall} style={{ width: `${Math.min(1, weeklyProgress) * 100}%` }} />
            </div>
            <Text className={styles.statValueSmall}>
              {completion.weekly.size}/{missionsByCategory.weekly.length}
            </Text>
          </div>
          <Text className={styles.statHint}>{TEXT.weeklyBonusHint}</Text>
        </Card>
        <Card className={styles.statCard}>
          <Text weight="2" className={styles.statTitle}>
            Monthly goals
          </Text>
          <div className={styles.statProgress}>
            <div className={styles.progressTrackSmall}>
              <div className={styles.progressValueSmall} style={{ width: `${Math.min(1, monthlyProgress) * 100}%` }} />
            </div>
            <Text className={styles.statValueSmall}>
              {completion.monthly.size}/{missionsByCategory.monthly.length}
            </Text>
          </div>
          <Text className={styles.statHint}>{TEXT.monthlyBonusHint}</Text>
        </Card>
        <Card className={styles.statCard}>
          <Text weight="2" className={styles.statTitle}>
            General missions
          </Text>
          <div className={styles.statProgress}>
            <div className={styles.progressTrackSmall}>
              <div className={styles.progressValueSmall} style={{ width: `${Math.min(1, generalProgress) * 100}%` }} />
            </div>
            <Text className={styles.statValueSmall}>
              {completion.general.size}/{missionsByCategory.general.length}
            </Text>
          </div>
          <Text className={styles.statHint}>Evergreen tasks that keep the Firewall ecosystem growing.</Text>
        </Card>
      </section>

      <section className={styles.tabs}>
        {TEXT.tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`${styles.tabButton} ${activeTab === tab.key ? styles.tabButtonActive : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            <span className={styles.tabCount}>
              {completion[tab.key].size}/{missionsByCategory[tab.key].length}
            </span>
          </button>
        ))}
      </section>

      <section className={styles.missionList}>
        {missions.map((mission) => {
          const completed = activeCompletion.has(mission.id);
          const missionLink = mission.ctaLink;
          const isVerifying = verifyingMissionId === mission.id;
          const actionLabel = completed
            ? TEXT.logged
            : mission.verification
              ? isVerifying
                ? TEXT.verifyInProgress
                : TEXT.verify
              : TEXT.markComplete;
          return (
            <Card
              key={mission.id}
              className={`${styles.missionCard} ${completed ? styles.missionCardCompleted : ""}`}
            >
              <div className={styles.missionCardHeader}>
                <div className={styles.missionIcon}>
                  <MissionIcon kind={mission.icon} completed={completed} />
                </div>
                <div className={styles.missionDetails}>
                  <Text weight="2" className={styles.missionTitle}>
                    {mission.title}
                  </Text>
                  <Text className={styles.missionDescription}>{mission.description}</Text>
                </div>
                <div className={styles.missionMeta}>
                  <span className={styles.missionXp}>{formatMissionXpLabel(mission)}</span>
                  <span className={`${styles.statusChip} ${completed ? styles.statusChipDone : styles.statusChipPending}`}>
                    {completed ? "Completed" : "Pending"}
                  </span>
                </div>
              </div>
              <div className={styles.missionAction}>
                {missionLink ? (
                  <Button size="s" mode="plain" onClick={() => openLink(missionLink)}>
                    {mission.ctaLabel ?? "Open link"}
                  </Button>
                ) : null}
                <Button
                  size="s"
                  mode={completed ? "plain" : "filled"}
                  onClick={() => {
                    void handleMissionComplete(activeTab, mission);
                  }}
                  disabled={completed || isVerifying}
                >
                  {actionLabel}
                </Button>
              </div>
            </Card>
          );
        })}
      </section>

      <section ref={storeSectionRef} className={styles.marketSection}>
        <Card className={styles.storeCard}>
          <div className={styles.storeHeader}>
            <Text weight="2" className={styles.storeTitle}>
              {TEXT.storeTitle}
            </Text>
            <Text className={styles.storeSubtitle}>{TEXT.storeSubtitle}</Text>
            <Text className={styles.storeBalance}>{`XP balance: ${xp.toLocaleString()}`}</Text>
          </div>
          <div className={styles.rewardGrid}>
            {REWARDS.map((reward) => {
              const redeemedCount = redeemedRewards[reward.id] ?? 0;
              const canRedeem = xp >= reward.cost;
              return (
                <div key={reward.id} className={styles.rewardCard}>
                  <div className={styles.rewardInfo}>
                    <Text weight="2" className={styles.rewardName}>
                      {reward.title}
                    </Text>
                    <Text className={styles.rewardDescription}>{reward.description}</Text>
                  </div>
                  <div className={styles.rewardActions}>
                    <span className={styles.rewardCost}>{reward.cost.toLocaleString()} XP</span>
                    <Button size="s" mode="filled" onClick={() => handleRedeemReward(reward)} disabled={!canRedeem}>
                      {TEXT.storeRedeemLabel}
                    </Button>
                  </div>
                  {redeemedCount > 0 && (
                    <Text className={styles.rewardRedeemed}>{`Redeemed ${redeemedCount}x`}</Text>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
        <Card className={styles.referralCard}>
          <Text weight="2" className={styles.referralTitle}>
            {TEXT.referralTitle}
          </Text>
          <Text className={styles.referralSubtitle}>{TEXT.referralSubtitle}</Text>
          <div className={styles.referralStats}>
            <Text weight="2">{TEXT.referralTracked(referralStats.tracked)}</Text>
            <Text weight="2">{TEXT.referralActivated(referralStats.activated)}</Text>
            <Text>{TEXT.referralPending(referralPending)}</Text>
            <Text>{TEXT.referralXpEarned(referralStats.xpEarned)}</Text>
          </div>
          <Text className={styles.referralHint}>{TEXT.referralHint}</Text>
          <code className={styles.referralLink}>{referralLink}</code>
          <div className={styles.referralActions}>
            <Button mode="plain" size="s" onClick={handleCopyReferral}>
              {TEXT.copyReferral}
            </Button>
          </div>
        </Card>
      </section>

      <Snackbar duration={2400} onClose={() => setSnackbar(null)}>
        {snackbar}
      </Snackbar>
    </div>
  );
}

function MissionIcon({ kind, completed }: { kind: MissionIconKey; completed: boolean }) {
  const base = ICON_PALETTE[kind] ?? DEFAULT_ICON_COLORS;
  const primary = completed ? "var(--app-color-accent-green)" : base.primary;
  const secondary = completed ? "rgba(74, 222, 128, 0.32)" : base.secondary;

  return (
    <div className={styles.iconStub} data-kind={kind} data-complete={completed}>
      <span className={styles.iconAccent} style={{ background: secondary }} />
      <span className={styles.iconDot} style={{ background: primary }} />
    </div>
  );
}



