import { MapModel } from "../schemas/map";

class Map {
  static async loadUserMapsById({ userId }) {
    const maps = await MapModel.find({ userId });
    return maps;
  }

  static async loadPublicMaps() {
    const publicMaps = await MapModel.find({ public: 1 });
    return publicMaps;
  }

  static async loadSpecificMapByMapId({ mapId }) {
    const specificMap = await MapModel.findOne({ mapId });
    return specificMap;
  }

  static async createMap(data) {
    const newMap = new MapModel(data);
    return await newMap.save();
  }

  static async updateMapByMapId(mapId, data) {
    return await MapModel.findByIdAndUpdate(mapId, data, { new: true });
  }

  static async deleteMapByMapId(mapId) {
    return await MapModel.findByIdAndDelete(mapId);
  }
}

export { Map };
