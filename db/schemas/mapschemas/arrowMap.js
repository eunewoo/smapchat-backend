// arrowMap.js

import mongoose from "mongoose";
import { MapSchema } from "./map"; // Assuming you exported MapSchema in map.js

// Define the ArrowPointLocation Schema
const ArrowPointLocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  locationId: {
    type: Number,
    required: true,
    unique: true,
  },
  longitude: {
    type: mongoose.SchemaTypes.Decimal128,
    required: true,
  },
  latitude: {
    type: mongoose.SchemaTypes.Decimal128,
    required: true,
  },
  order: {
    type: Number,
    required: true,
    min: 2,
    max: 10,
  },
  date: {
    type: Date,
    required: true,
  },
});

// Extend the MapSchema with ArrowMap specific fields
const ArrowMapSchema = new mongoose.Schema({
  maxpin: {
    type: Number,
    required: true,
    min: 2,
    max: 10,
  },
  locationIds: [
    {
      type: Number,
    },
  ],
  arrowPointLocations: [ArrowPointLocationSchema], // embedding the ArrowPointLocation schema
});

// ArrowMap will be a discriminator of Map
const BaseMapModel = mongoose.model("Map", MapSchema);
const ArrowMapModel = BaseMapModel.discriminator("ArrowMap", ArrowMapSchema);

export { ArrowMapModel };
