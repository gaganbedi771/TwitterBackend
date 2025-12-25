const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    onModel: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"],
    },
    likeable: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refpath: "onModel",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

likeSchema.index({ onModel: 1, likeable: 1, user: 1 }, { unique: true });

const Like = mongoose.model("Like", likeSchema);
module.exports = Like;
