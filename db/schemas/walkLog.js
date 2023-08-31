import mongoose from "mongoose";

const WalkLogSchema = new mongoose.Schema({
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  steps: {
    type: Number,
    required: true,
    defulat: 0,
    unique: false,
  },
  date: {
    type: Date,
    required: true,
    unique: false,
  },
});

const WalkLogModel = mongoose.model("WalkLog", WalkLogSchema);
export { WalkLogModel };
