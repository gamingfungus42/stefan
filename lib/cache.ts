import mongoose from "mongoose";

const CacheIndexSchema = new mongoose.Schema(
  {
    query: {
      type: String,
      required: true,
    },
    results: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// CacheIndexSchema.plugin(toJSON);
const CacheIndex = mongoose.model("CacheIndex", CacheIndexSchema);

module.exports = {
  CacheIndex,
};
