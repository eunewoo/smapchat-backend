import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  count: {
    type: Number,
    required: true,
    default: 0,
    unique: false,
  },
});

const UserModel = mongoose.model("User", UserSchema);
export { UserModel };
