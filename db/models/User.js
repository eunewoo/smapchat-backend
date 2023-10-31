import { UserModel } from "../schemas/user.js";
import bcrypt from "bcryptjs";

class User {
  static async findByEmail(email) {
    return await UserModel.findOne({ email });
  }

  static async createUser(email, username, password, avatar) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      email,
      username,
      password: hashedPassword,
      avatar,
    });
    await newUser.save();
    return newUser;
  }

  static async updateProfile(userId, updatedData) {
    // This function assumes updatedData is an object containing the fields to be updated
    return UserModel.findByIdAndUpdate(userId, updatedData, { new: true });
  }

  static async verifyCode(userId, code) {
    const user = await UserModel.findById(userId);
    if (!user) throw new Error("User not found");

    if (user.verificationCode === code) {
      user.isVerified = true;
      user.verificationCode = null; // Clear the verification code
      await user.save();
      return true;
    }
    return false;
  }

  static async updateActivationStatus(userId, isActive) {
    return await UserModel.findByIdAndUpdate(
      userId,
      { isActive },
      { new: true }
    );
  }

  static async deleteUserById(userId) {
    return await UserModel.findByIdAndDelete(userId);
  }
}

export { User };
