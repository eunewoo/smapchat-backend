import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import { sendMail } from "./mailService.js";

class userAuthService {
  static async getUserByEmail(email, password) {
    const user = await User.findByEmail(email);
    if (!user) throw new Error("User not found");

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) throw new Error("Incorrect password");

    return user;
  }

  static async createUser(email, username, password, avatar) {
    return await User.createUser(email, username, password, avatar);
  }

  static async updateActivationStatus(userId, isActive) {
    return await User.updateActivationStatus(userId, isActive);
  }

  static async deleteUserById(userId) {
    return await User.deleteUserById(userId);
  }

  static async updateProfile(userId, updatedData) {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    if (
      updatedData.password &&
      !(await bcrypt.compare(updatedData.currentPassword, user.password))
    ) {
      throw new Error("Current password is incorrect");
    }

    if (updatedData.newPassword) {
      updatedData.password = await bcrypt.hash(updatedData.newPassword, 10);
      delete updatedData.newPassword;
      delete updatedData.currentPassword;
    }

    return await User.updateProfile(userId, updatedData);
  }

  static async verifyCode(userId, code) {
    return await User.verifyCode(userId, code);
  }

  static async forgotPassword(email) {
    const user = await UserModel.findOne({ email: email });

    if (!user) throw new Error("No user with that email address");

    const tempPassword = generateTempPassword(); // Implement this function
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    user.password = hashedPassword;
    await user.save();

    // Send temporary password via email
    await sendMail(
      user.email,
      "Temporary Password",
      `Your temporary password is: ${tempPassword}`
    );
  }
}

export { userAuth };
