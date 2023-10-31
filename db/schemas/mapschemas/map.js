import mongoose from "mongoose";

const MapSchema = new mongoose.Schema({
  mapType: {
    type: Number,
    required: true,
    unique: false,
    min: 1,
    max: 5,
  },
  title: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: false,
    unique: false,
  },
  mapID: {
    type: Number,
    required: true,
    unique: true,
  },
  rate: {
    type: Number,
    required: true,
    unique: false,
    min: 0,
    max: 5,
  },
  comment: {
    type: [Number], // Assuming that comment is an array of numbers.
    required: false,
    unique: false,
  },
  mapFile: {
    type: String,
    required: false,
    unique: false,
  },
  date: {
    type: Date,
    required: true,
    unique: false,
  },
});

const MapModel = mongoose.model("Map", MapSchema);
export { MapModel };
