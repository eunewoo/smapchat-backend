import { User } from "../db/index.js";
import console_logger from "../middlewares/console_logger.js";

class userAuth {
  static async checkPhoneNumber({ phoneNumber }) {
    const USER = await User.findByPhoneNumber({ phoneNumber });
    if (USER) return USER;
    else false;
  }

  /**
   * Singup
   */
  static async addUser({ phoneNumber, name, gender, bod, height, walkgoal }) {
    // if (!name || !password) {
    //   console.error("Some values are missed for sign-up");
    //   return { errorMsg: "validation_failed" };
    // }

    const NEW_USER = {
      phoneNumber,
      name,
      gender,
      bod,
      height,
      walkgoal,
    };

    // console.log(NEW_USER);
    try {
      const CREATED_UESR = await User.create({ NEW_USER });
    } catch (e) {
      console.log(e);
    }

    return CREATED_UESR;
  }

  static async checkUserByIdPw({ id, password }) {
    const USER = await User.findById({ id });
    if (!USER) return false;

    const IS_CORRECT = await bcrypt.compare(password, USER.encryptedPassword);
    if (IS_CORRECT) return USER;

    return false;
  }

  static async deleteByPhoneNumber({ phoneNumber }) {
    const walkLog = await User.deleteByPhoneNumber({ phoneNumber });
    return walkLog;
  }
}

export { userAuth };
