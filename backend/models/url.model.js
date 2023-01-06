const mongoose = require("mongoose");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId();
const urlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      required: [true, "Full url is required"],
    },
    hashUrl: {
      type: String,
      default: uid(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("url", urlSchema);
