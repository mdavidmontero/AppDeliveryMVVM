import React, { useState } from "react";
import { GetAllCategoryUseCase } from "../../../../../domain/useCases/category/GetAllCategory";
import { Category } from "../../../../../domain/entities/Category";

const ClientCategoryListViewModel = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    const result = await GetAllCategoryUseCase();
    setCategories(result);
  };

  return {
    categories,
    getCategories,
  };
};

export default ClientCategoryListViewModel;
