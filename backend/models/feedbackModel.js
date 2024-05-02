const mongoose = require("mongoose");
const reportSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
    },
    description: {
      type: String,
    },
    name: {
      type: String,
    },
    adress: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    PostedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model("report", reportSchema);
