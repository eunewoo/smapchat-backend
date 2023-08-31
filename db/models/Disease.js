import { DiseaseModel } from "../schemas/disease.js";

class Disease {
  static async create({ NEW_DISEASE }) {
    const CREATED_DISEASE = await DiseaseModel.create(NEW_DISEASE);
    return CREATED_DISEASE;
  }
  static async findByPhoneNumber({ phoneNumber }) {
    const DISEASE = await DiseaseModel.findOne({ phoneNumber });
    return DISEASE;
  }
  static async updateInfo({ phoneNumber, fieldToUpdate, newValue }) {
    const FILTER = { phoneNumber };
    const UPDATE = { [fieldToUpdate]: newValue };
    const OPTION = { returnOriginal: false };

    const UPDATED_DISEASE = await DiseaseModel.findOneAndUpdate({
      FILTER,
      UPDATE,
      OPTION,
    });

    return UPDATED_DISEASE;
  }
}

export { Disease };
