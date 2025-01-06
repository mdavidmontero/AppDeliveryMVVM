import React from "react";
import { Category } from "../../entities/Category";
import * as ImagePicker from "expo-image-picker";
import { CategoryRepositoryImpl } from "../../../data/repositories/CategoryRepository";
const { create } = new CategoryRepositoryImpl();

export const CreateCategoryUseCase = async (
  category: Category,
  file: ImagePicker.ImageInfo
) => {
  return await create(category, file);
};
