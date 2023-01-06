const mongoose = require("mongoose");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 6 }); //as much as length the chance of collision is less
const urlSchema = new mongoose.Schema(
  {
    fullUrl: {
      type: String,
      required: [true, "Full url is required"],
    },
    hashUrl: {
      type: String,
      default: function () {
        return uid();
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("url", urlSchema);
