import { UserLocalRepositoryImpl } from "../../../data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { save } = new UserLocalRepositoryImpl();

export const saveUserLocalUseCase = async (user: User) => {
  return await save(user);
};
