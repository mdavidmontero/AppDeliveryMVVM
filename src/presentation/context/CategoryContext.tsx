import { createContext, useState, useEffect } from "react";
import { Category } from "../../domain/entities/Category";
import * as ImagePicker from "expo-image-picker";
import { ResponseApiDelivery } from "../../data/sources/remote/models/ResponseApiDelivery";
import { GetAllCategoryUseCase } from "../../domain/useCases/category/GetAllCategory";
import { CreateCategoryUseCase } from "../../domain/useCases/category/CreateCategory";
import { UpdateCategoryUseCase } from "../../domain/useCases/category/UpdateCategory";
import { UpdateWithImageCategoryUseCase } from "../../domain/useCases/category/UpdateWithImageCategory";
import { DeleteCategoryUseCase } from "../../domain/useCases/category/DeleteCategory";

export interface CategoryContextProps {
  categories: Category[];
  getCategories(): Promise<void>;
  create(
    category: Category,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiDelivery>;
  update(category: Category): Promise<ResponseApiDelivery>;
  updateWithImage(
    category: Category,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiDelivery>;
  remove(id: string): Promise<ResponseApiDelivery>;
}

export const CategoryContext = createContext({} as CategoryContextProps);

export const CategoryProvider = ({ children }: any) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, []);

  const getCategories = async (): Promise<void> => {
    const result = await GetAllCategoryUseCase();
    setCategories(result);
  };

  const create = async (
    category: Category,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiDelivery> => {
    const response = await CreateCategoryUseCase(category, file!);
    console.log(response);
    getCategories();
    return response;
  };

  const update = async (category: Category): Promise<ResponseApiDelivery> => {
    const response = await UpdateCategoryUseCase(category);
    getCategories();
    return response;
  };

  const updateWithImage = async (
    category: Category,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiDelivery> => {
    const response = await UpdateWithImageCategoryUseCase(category, file);
    getCategories();
    return response;
  };

  const remove = async (id: string): Promise<ResponseApiDelivery> => {
    const response = await DeleteCategoryUseCase(id);
    getCategories();
    return response;
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        getCategories,
        create,
        update,
        updateWithImage,
        remove,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
