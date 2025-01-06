import { CategoryRepositoryImpl } from "../../../data/repositories/CategoryRepository";

const { getAll } = new CategoryRepositoryImpl();

export const GetAllCategoryUseCase = async () => {
  return await getAll();
};
