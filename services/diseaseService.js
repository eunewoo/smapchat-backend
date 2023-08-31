import { Disease } from "../db/index.js";
// import { diseaseModel } from "../../db/schemas/disease.js";

class validatedisease {
  static async changeDisease({ phoneNumber, diseaseId, diseaseKind }) {
    const NEW_DISEASE = {
      phoneNumber,
      diseaseId,
      diseaseKind,
    };

    const CREATED_DISEASE = await Disease.updateInfo(NEW_DISEASE);
    return CREATED_DISEASE;
  }

  static async findByPhoneNumber({ phoneNumber }) {
    const disease = await Disease.findByPhoneNumber({ phoneNumber });
    return disease;
  }
}

export { validatedisease };
