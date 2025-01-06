import React from "react";
import { Category } from "../../entities/Category";
import * as ImagePicker from "expo-image-picker";
import { CategoryRepositoryImpl } from "../../../data/repositories/CategoryRepository";
const { update } = new CategoryRepositoryImpl();

export const UpdateCategoryUseCase = async (category: Category) => {
  return await update(category);
};
