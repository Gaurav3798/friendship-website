const mongoose = require("mongoose");

const friendshipSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    answers: {
      type: [String],
      default: [],
    },

    quizAnswer: {
      type: String,
      default: "",
    },

    approved: {
      type: Boolean,
      default: false,
    },

    message: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Friendship", friendshipSchema);