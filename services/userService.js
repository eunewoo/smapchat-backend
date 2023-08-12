import { User } from "../db/index.js";
import console_logger from "../middlewares/console_logger.js";

class userAuth {
  static async checkPhoneNumber({ phoneNumber }) {
    const USER = await User.findByPhoneNumber({ phoneNumber });
    if (!USER) return false;
    else true;
  }

  /**
   * Singup
   */
  static async addUser({
    phoneNumber,
    password,
    name,
    gender,
    height,
    walkgoal,
  }) {
    // if (!name || !id || !password) {
    //   console.error("Some values are missed for sign-up");
    //   return { errorMsg: "validation_failed" };
    // }
  }
}

export { userAuth };
