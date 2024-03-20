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
    ampScoredTeleop: Number,
    speakerScoredTeleop: Number,
    trap: Boolean,
    endPosition: String,
    harmony: Boolean,
    additionalComments: String,
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.models.values || mongoose.model("values", dataSchema);
export default Data;
