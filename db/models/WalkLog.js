import { WalkLogModel } from "../schemas/walkLog.js";

class WalkLog {
  static async findByPhoneNumber({ phoneNumber }) {
    const walkLog = await UserModel.findOne({ phoneNumber });
    return walkLog;
  }
  static async findByPhoneNumberwithDate({ phoneNumber, Date }) {
    const LOGS = await WalkLogModel.find({ phoneNumber, Date });
    return LOGS;
  }
  static async updateInfo({ phoneNumber, date, fieldToUpdate, newValue }) {
    const FILTER = { phoneNumber, date };
    const UPDATE = { [fieldToUpdate]: newValue };
    const OPTION = { returnOriginal: false };

    const UPDATED_USER = await WalkLogModel.findOneAndUpdate({
      FILTER,
      UPDATE,
      OPTION,
    });

    return UPDATED_USER;
  }
}

export { WalkLog };
