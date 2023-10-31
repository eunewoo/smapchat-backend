import { Router } from "express";
import { mapHandle } from "../services/mapService";
import console_logger from "../middlewares/console_logger";

const mapRouter = Router();

mapRouter.get("/map/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const userMaps = await mapHandle.loadUserMapsById({ userId });
    res.status(200).send({ userMaps });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

mapRouter.get("/map/public", async (req, res, next) => {
  try {
    const publicMaps = await mapHandle.loadPublicMaps();
    res.status(200).send({ publicMaps });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

mapRouter.get("/map/specific", async (req, res, next) => {
  try {
    const { userId, mapId } = req.body;
    const specificMap = await mapHandle.loadSpecificMapByMapId({
      userId,
      mapId,
    });
    res.status(200).send({ specificMap });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

mapRouter.post("/map", async (req, res, next) => {
  try {
    const mapData = await mapHandle.createMap(req.body.mapData);
    res.status(201).send({ mapData });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

mapRouter.put("/map/:mapId", async (req, res, next) => {
  try {
    const { mapId } = req.params;
    const updatedMap = await mapHandle.updateMapByMapId(
      mapId,
      req.body.mapData
    );
    res.status(200).send({ updatedMap });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

mapRouter.delete("/map/:mapId", async (req, res, next) => {
  try {
    const { mapId } = req.params;
    await mapHandle.deleteMapByMapId(mapId);
    res.status(200).send({ message: "Deleted successfully!" });
  } catch (err) {
    console_logger("Router Error", err.message, true);
    next(err);
  }
});

export { mapRouter };
