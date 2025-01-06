import React from "react";
import { Category } from "../../entities/Category";
import * as ImagePicker from "expo-image-picker";
import { CategoryRepositoryImpl } from "../../../data/repositories/CategoryRepository";
const { updateWithImage } = new CategoryRepositoryImpl();

export const UpdateWithImageCategoryUseCase = async (
  category: Category,
  file: ImagePicker.ImageInfo
) => {
  return await updateWithImage(category, file);
};
