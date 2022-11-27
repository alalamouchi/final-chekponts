const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VOTESchema = new Schema(
  {
    YESVOTE: {
      type: Number,
      required: true,
      default: 0,
    },
    NOVOTE: {
      type: Number,
      required: true,
      default: 0,
    },
    Title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VOTE", VOTESchema);
