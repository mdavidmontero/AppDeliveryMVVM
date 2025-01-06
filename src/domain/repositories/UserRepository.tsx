import { User } from "../entities/User";
import * as ImagePicker from "expo-image-picker";
import { ResponseApiDelivery } from "../../data/sources/remote/models/ResponseApiDelivery";

export interface UserRepository {
  update(user: User): Promise<ResponseApiDelivery>;
  updateWithImage(
    user: User,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiDelivery>;
}
