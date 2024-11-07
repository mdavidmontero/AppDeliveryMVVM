import { UserLocalRepositoryImpl } from "../../../data/repositories/UserLocalRepository";

const { getUser } = new UserLocalRepositoryImpl();

export const getUserLocalUseCase = async () => {
  return await getUser();
};
