import { Map } from "../models/Map";
import console_logger from "../middlewares/console_logger";

class mapHandle {
  static async loadUserMapsById({ userId }) {
    if (!userId) {
      console_logger(
        "Service Error",
        "No userId provided for loadUserMapsById method",
        true
      );
      return [];
    }

    const maps = await Map.loadUserMapsById({ userId });
    return maps;
  }

  static async loadPublicMaps() {
    const publicMaps = await Map.loadPublicMaps();
    return publicMaps;
  }

  static async loadSpecificMapByMapId({ userId, mapId }) {
    if (!userId || !mapId) {
      console_logger(
        "Service Error",
        "Missing parameters for loadSpecificMapByMapId method",
        true
      );
      return null;
    }

    const specificMap = await Map.loadSpecificMapByMapId({ userId, mapId });
    return specificMap;
  }

  static async createMap(data) {
    if (!data.mapId || !data.mapType || !data.title) {
      console_logger(
        "Service Error",
        "Missing parameters for createMap method",
        true
      );
      return null;
    }

    const mapData = await Map.createMap(data);
    return mapData;
  }

  static async updateMapByMapId(mapId, data) {
    if (!mapId || !data) {
      console_logger(
        "Service Error",
        "Missing parameters for updateMapByMapId method",
        true
      );
      return null;
    }

    const updatedMap = await Map.updateMapByMapId(mapId, data);
    return updatedMap;
  }

  static async deleteMapByMapId(mapId) {
    if (!mapId) {
      console_logger(
        "Service Error",
        "Missing mapId for deleteMapByMapId method",
        true
      );
      return null;
    }

    await Map.deleteMapByMapId(mapId);
  }
}

export { mapHandle };
