import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    /**
     * -1 : Anomaly
     * 0 : Male
     * 1 : Female
     */
    type: Number,
    required: true,
    unique: false,
  },
  age: {
    type: Date,
    required: true,
    unique: false,
  },
  height: {
    type: Number,
    required: true,
    unique: false,
  },
  walkgoal: {
    type: Number,
    required: false,
    unique: false,
  },
});

const UserModel = mongoose.model("User", UserSchema);
export { UserModel };
