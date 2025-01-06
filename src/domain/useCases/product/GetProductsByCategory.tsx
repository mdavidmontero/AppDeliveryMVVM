import { ProductRepositoryImpl } from "../../../data/repositories/ProductRepository";

const { getProductsByCategory } = new ProductRepositoryImpl();

export const GetProductsByCategoryUseCase = async (idCategory: string) => {
  return await getProductsByCategory(idCategory);
};
