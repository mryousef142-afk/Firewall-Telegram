import { Router } from "express";

import { requireTelegramInitData } from "../middleware/telegramInit.js";
import { verifyTelegramChannelMembership } from "../../services/telegramMembershipService.js";

export function createMissionsRouter(): Router {
  const router = Router();

  router.post(
    "/verify-channel",
    requireTelegramInitData(),
    async (req, res) => {
      const { channelUsername } = (req.body ?? {}) as { channelUsername?: unknown };
      if (typeof channelUsername !== "string" || channelUsername.trim().length === 0) {
        res.status(400).json({ error: "channelUsername is required" });
        return;
      }

      try {
        const userId = req.telegramAuth!.userId;
        const ok = await verifyTelegramChannelMembership(userId, channelUsername);
        res.json({ ok });
      } catch (error) {
        res.status(502).json({
          error: error instanceof Error ? error.message : "Unable to verify channel membership",
        });
      }
    },
  );

  return router;
}

