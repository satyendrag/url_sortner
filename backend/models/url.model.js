const mongoose = require("mongoose");
const { ShortUniqueId } = require("short-unique-id");

const urlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      required: [true, "Full url is required"],
    },
    hashUrl: {
      type: String,
      default: new ShortUniqueId({ length: 10 }),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("url", urlSchema);
