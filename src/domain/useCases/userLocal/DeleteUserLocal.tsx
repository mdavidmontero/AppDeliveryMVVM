import { UserLocalRepositoryImpl } from "../../../data/repositories/UserLocalRepository";

const { remove } = new UserLocalRepositoryImpl();

export const DeleteUserLocalUseCase = async () => {
  return await remove();
};
