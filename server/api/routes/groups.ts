import { Router } from "express";
import { requireTelegramInitData } from "../middleware/telegramInit.js";
import { requirePanelAdmin } from "../middleware/acl.js";
import {
  buildManagedGroup,
  loadGroupsSnapshot,
  searchGroupRecords,
} from "../../services/dashboardService.js";
import {
  listModerationActionsFromDb,
  listMembershipEventsFromDb,
} from "../../db/stateRepository.js";
import {
  loadBanSettings,
  saveBanSettings,
  GroupNotFoundError,
  loadGroupGeneralSettings,
  saveGroupGeneralSettings,
  loadSilenceSettings,
  saveSilenceSettings,
  loadMandatoryMembershipSettings,
  saveMandatoryMembershipSettings,
  loadCustomTextSettings,
  saveCustomTextSettings,
  loadGroupCountLimitSettings,
  saveGroupCountLimitSettings,
} from "../../db/groupSettingsRepository.js";
import { logger } from "../../utils/logger.js";

export function createGroupsRouter(): Router {
  const router = Router();

  router.use(requireTelegramInitData());
  router.use(requirePanelAdmin());

  router.get("/", async (_req, res) => {
    const records = await loadGroupsSnapshot();
    const payload = records.map((record) => buildManagedGroup(record));
    res.json({ groups: payload });
  });

  router.get("/search", async (req, res) => {
    const query = typeof req.query.q === "string" ? req.query.q : "";
    const limit = Number.isFinite(Number(req.query.limit)) ? Number(req.query.limit) : 20;
    const results = await searchGroupRecords(query, limit);
    res.json({ query, results });
  });

  router.get("/:chatId/moderation-actions", async (req, res) => {
    const chatId = req.params.chatId;
    if (!chatId) {
      res.status(400).json({ error: "chatId is required" });
      return;
    }
    const limit = Number.isFinite(Number(req.query.limit)) ? Number(req.query.limit) : 100;
    const actions = await listModerationActionsFromDb(chatId, limit);
    res.json({ chatId, actions });
  });

  router.get("/:chatId/membership-events", async (req, res) => {
    const chatId = req.params.chatId;
    if (!chatId) {
      res.status(400).json({ error: "chatId is required" });
      return;
    }
    const limit = Number.isFinite(Number(req.query.limit)) ? Number(req.query.limit) : 100;
    const events = await listMembershipEventsFromDb(chatId, limit);
    res.json({ chatId, events });
  });

  router.get("/:groupId/settings/bans", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    try {
      const settings = await loadBanSettings(groupId);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to load group ban settings", { groupId, error });
      res.status(500).json({ error: "Failed to load group ban settings" });
    }
  });

  router.put("/:groupId/settings/bans", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    if (!req.body || typeof req.body !== "object") {
      res.status(400).json({ error: "Ban settings payload must be an object" });
      return;
    }
    try {
      const settings = await saveBanSettings(groupId, req.body);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to save group ban settings", { groupId, error });
      res.status(500).json({ error: "Failed to save group ban settings" });
    }
  });

  router.get("/:groupId/settings/general", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    try {
      const settings = await loadGroupGeneralSettings(groupId);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to load group general settings", { groupId, error });
      res.status(500).json({ error: "Failed to load group general settings" });
    }
  });

  router.put("/:groupId/settings/general", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    if (!req.body || typeof req.body !== "object") {
      res.status(400).json({ error: "General settings payload must be an object" });
      return;
    }
    try {
      const settings = await saveGroupGeneralSettings(groupId, req.body);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to save group general settings", { groupId, error });
      res.status(500).json({ error: "Failed to save group general settings" });
    }
  });

  router.get("/:groupId/settings/silence", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    try {
      const settings = await loadSilenceSettings(groupId);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to load group silence settings", { groupId, error });
      res.status(500).json({ error: "Failed to load group silence settings" });
    }
  });

  router.put("/:groupId/settings/silence", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    if (!req.body || typeof req.body !== "object") {
      res.status(400).json({ error: "Silence settings payload must be an object" });
      return;
    }
    try {
      const settings = await saveSilenceSettings(groupId, req.body);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to save group silence settings", { groupId, error });
      res.status(500).json({ error: "Failed to save group silence settings" });
    }
  });

  router.get("/:groupId/settings/mandatory", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    try {
      const settings = await loadMandatoryMembershipSettings(groupId);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to load group mandatory settings", { groupId, error });
      res.status(500).json({ error: "Failed to load group mandatory settings" });
    }
  });

  router.put("/:groupId/settings/mandatory", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    if (!req.body || typeof req.body !== "object") {
      res.status(400).json({ error: "Mandatory settings payload must be an object" });
      return;
    }
    try {
      const settings = await saveMandatoryMembershipSettings(groupId, req.body);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to save group mandatory settings", { groupId, error });
      res.status(500).json({ error: "Failed to save group mandatory settings" });
    }
  });

  router.get("/:groupId/settings/custom-texts", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    try {
      const settings = await loadCustomTextSettings(groupId);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to load group custom text settings", { groupId, error });
      res.status(500).json({ error: "Failed to load group custom text settings" });
    }
  });

  router.put("/:groupId/settings/custom-texts", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    if (!req.body || typeof req.body !== "object") {
      res.status(400).json({ error: "Custom text settings payload must be an object" });
      return;
    }
    try {
      const settings = await saveCustomTextSettings(groupId, req.body);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to save group custom text settings", { groupId, error });
      res.status(500).json({ error: "Failed to save group custom text settings" });
    }
  });

  router.get("/:groupId/settings/limits", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    try {
      const settings = await loadGroupCountLimitSettings(groupId);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to load group limit settings", { groupId, error });
      res.status(500).json({ error: "Failed to load group limit settings" });
    }
  });

  router.put("/:groupId/settings/limits", async (req, res) => {
    const groupId = req.params.groupId;
    if (!groupId) {
      res.status(400).json({ error: "groupId is required" });
      return;
    }
    if (!req.body || typeof req.body !== "object") {
      res.status(400).json({ error: "Limit settings payload must be an object" });
      return;
    }
    try {
      const settings = await saveGroupCountLimitSettings(groupId, req.body);
      res.json(settings);
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        res.status(404).json({ error: "Group not found" });
        return;
      }
      logger.error("failed to save group limit settings", { groupId, error });
      res.status(500).json({ error: "Failed to save group limit settings" });
    }
  });

  return router;
}
