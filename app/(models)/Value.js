import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const dataSchema = new Schema(
  {
    name: String,
    matchNumber: Number,
    position: String,
    noShow: Boolean,
    mobility: Boolean,
    ampScoredAuto: Number,
    speakerScoredAuto: Number,
    cycles: Number,
    ampScoredTeleop: Number,
    speakerScoredTeleop: Number,
    speakerDefense: Boolean,
    sourceDefense: Boolean,
    trap: Boolean,
    endPosition: String,
    disabled: Boolean,
    foul: Number,
    totalScore: Number,
    additionalComments: String,
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.models.values || mongoose.model("values", dataSchema);
export default Data;
