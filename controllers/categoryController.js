import asyncHandler from "express-async-handler";
import Category from "../models/category.js";

/**
 * @desc GET Categories
 * @route GET /api/categories
 * @access public
 */
export const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({ s });
  res.json(categories);
});

/**
 * @desc POST Category
 * @route POST /api/categories
 * @access public
 */
export const createCategory = asyncHandler(async (req, res) => {
  const createdCategory = await Category.create(req.body);
  res.status(201).json(createdCategory);
});
