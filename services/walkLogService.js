import { WalkLog } from "../db/index.js";
// import { WalkLogModel } from "../../db/schemas/WalkLog.js";

class validateWalkLog {
  static async addWalkLog({ phoneNumber, steps, date }) {
    const NEW_WALKLOG = {
      phoneNumber,
      steps,
      date,
    };

    const CREATED_WALKLOG = await WalkLog.updateInfo(NEW_WALKLOG);
    return CREATED_WALKLOG;
  }

  static async findByPhoneNumber({ phoneNumber }) {
    const walkLog = await WalkLog.findByPhoneNumber({ phoneNumber });
    return walkLog;
  }

  static async findByPhoneNumberwithDate({ phoneNumber, date }) {
    const LOGS = await WalkLog.findByPhoneNumberwithDate({ phoneNumber, date });
    return LOGS;
  }
}

export { validateWalkLog };
