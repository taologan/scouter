import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const dataSchema = new Schema(
  {
    Name: String,
    MatchNumber: Number,
    Position: String,
    NoShow: Boolean,
    Mobility: Boolean,
    AutoAmpScored: Number,
    AutoSpeakerScored: Number,
    TeleopAmpScored: Number,
    TeleopSpeakerScored: Number,
    Trap: Boolean,
    EndPosition: String,
    Harmony: Boolean,
    Comments: String,
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.models.Data || mongoose.model("Data", dataSchema);
export default Data;
