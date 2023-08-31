import mongoose from "mongoose";

const DiseaseSchema = new mongoose.Schema({
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  diseaseId: {
    type: Number,
    required: true,
    unique: false,
  },
  diseaseKind: {
    type: String,
    required: true,
    unique: false,
  },
});

const DiseaseModel = mongoose.model("DiseaseLog", DiseaseSchema);
export { DiseaseModel };
