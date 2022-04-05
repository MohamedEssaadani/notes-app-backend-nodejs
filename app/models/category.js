import mongoose from "mongoose";

/**
 * *Create Schema
 */
const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * *Create Model
 */
const Category = mongoose.model("Category", categorySchema);

export default Category;
