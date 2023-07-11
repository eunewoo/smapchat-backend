import { User } from "../db/index.js";
import console_logger from "../middlewares/console_logger.js";

class userHandle {
  static async addUser({ name }) {
    if (!name)
      console_logger(
        "Service Error",
        "UserService : no name for addUser method",
        true
      );
    // Skipped user validating
    const NEW_USER = {
      name,
    };
    const CREATED_USER = await User.create({ USER: NEW_USER });
    console_logger("Service Info", "UserService : user created", false);
    console.log(CREATED_USER);

    return true;
  }
  static async getCount({ oid }) {
    if (!oid)
      console_logger(
        "Service Error",
        "UserService : no uid for getCount method",
        true
      );

    const USER = await User.findByOid({ oid });

    if (!USER?.count) {
      console_logger(
        "Service Error",
        "UserService : There is no count field at USER data",
        true
      );
      console.log("User info : ", USER);
      return false;
    }

    return USER.count;
  }
  static async updateCount({ oid, count }) {
    if (!oid)
      console_logger(
        "Service Error",
        "UserService : no oid for updateCount method",
        true
      );
    if (!count)
      console_logger(
        "Service Error",
        "UserService : no count for updateCount method",
        true
      );

    const UPDATED = await User.updateCount({ oid, count });
    if (!UPDATED) console_logger("Service Error", "Update count failed", true);
    return UPDATED;
  }
}

export { userHandle };
