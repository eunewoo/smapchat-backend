import { WalkLog } from "../db/models/WalkLog.js";

class validateWalkLog {
  static async addWalkLog({ phoneNumber, steps, date }) {
    const NEW_WALKLONG = {
      phoneNumber,
      steps,
      date,
    };
    const NEW_DATA = await WalkLog.addWalkLog({ NEW_WALKLOG });
    if (!NEW_DATA) return false;
    return true;
  }
}

export { validateWalkLog };
