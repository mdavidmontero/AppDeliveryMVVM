import React from "react";
import { Category } from "../../entities/Category";
import * as ImagePicker from "expo-image-picker";
import { CategoryRepositoryImpl } from "../../../data/repositories/CategoryRepository";
const { remove } = new CategoryRepositoryImpl();

export const DeleteCategoryUseCase = async (id: string) => {
  return await remove(id);
};
