import { UserModel } from "../schemas/user.js";

class User {
  static async create({ NEW_USER }) {
    const CREATED_USER = await UserModel.create(NEW_USER);
    return CREATED_USER;
  }
  static async findByPhoneNumber({ phoneNumber }) {
    const USER = await UserModel.findOne({ phoneNumber });
    return USER;
  }
  static async deleteByPhoneNumber({ phoneNumber }) {
    const result = await UserModel.deleteOne({ phoneNumber });
    if (result.deletedCount > 0) {
      return { success: true, message: "User deleted successfully." };
    } else {
      return { success: false, message: "User not found or deletion failed." };
    }
  }

  static async updateInfo({ phoneNumber, fieldToUpdate, newValue }) {
    const FILTER = { phoneNumber };
    const UPDATE = { [fieldToUpdate]: newValue };
    const OPTION = { returnOriginal: false };

    const UPDATED_USER = await UserModel.findOneAndUpdate({
      FILTER,
      UPDATE,
      OPTION,
    });
    return UPDATED_USER;
  }
}

export { User };
