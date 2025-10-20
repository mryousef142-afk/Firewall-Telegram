const inviteLink = (import.meta.env.VITE_INVITE_LINK as string | undefined)?.trim();
const rawDelay =
  import.meta.env.VITE_DASHBOARD_DELAY_MS ??
  (import.meta.env.DEV ? "300" : "0");
const parsedMockDelay = Number(rawDelay);

export const dashboardConfig = {
  inviteLink: inviteLink && inviteLink.length > 0 ? inviteLink : undefined,
  refreshIntervalMs: Number(import.meta.env.VITE_DASHBOARD_REFRESH_MS ?? "0"),
  mockDelayMs: Number.isFinite(parsedMockDelay)
    ? parsedMockDelay
    : import.meta.env.DEV
    ? 300
    : 0,
};
