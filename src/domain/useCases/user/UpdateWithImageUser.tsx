import { UserRepositoryImpl } from "../../../data/repositories/UserRepository";
import { User } from "../../entities/User";
import * as ImagePicker from "expo-image-picker";

const { updateWithImage } = new UserRepositoryImpl();

export const UpdateImageUserUseCase = async (
  user: User,
  file: ImagePicker.ImageInfo
) => {
  return await updateWithImage(user, file);
};
