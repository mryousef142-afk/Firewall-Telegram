import { getTelegramInitData } from "@/utils/telegram";

type VerifyChannelResponse = {
  ok: boolean;
};

export async function verifyChannelMembership(channelUsername: string): Promise<boolean> {
  const normalized = channelUsername.replace(/^@+/u, "").trim();
  if (!normalized) {
    throw new Error("Invalid channel username");
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const initData = getTelegramInitData();
  if (initData) {
    headers["X-Telegram-Init-Data"] = initData;
  }

  const response = await fetch("/api/missions/verify-channel", {
    method: "POST",
    headers,
    body: JSON.stringify({ channelUsername: normalized }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || `Request failed with status ${response.status}`);
  }

  const payload = (await response.json()) as VerifyChannelResponse | null;
  if (!payload || typeof payload.ok !== "boolean") {
    throw new Error("Unexpected response from verification endpoint");
  }

  return payload.ok;
}

