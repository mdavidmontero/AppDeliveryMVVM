import { ImageInfo } from "expo-image-picker";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";
import {
  ApiDelivery,
  ApiDeliveryFormImage,
} from "../sources/remote/api/ApiDelivery";
import mime from "mime";

export class UserRepositoryImpl implements UserRepository {
  async update(user: User): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.put<ResponseApiDelivery>(
        "/users/updatewithoutimage",
        user
      );
      return Promise.resolve(response.data);
    } catch (error) {
      console.log(error);
      let e = error as AxiosError;
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
  async updateWithImage(
    user: User,
    file: ImageInfo
  ): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();
      // @ts-ignore
      data.append("image", {
        uri: file.uri,
        name: file.uri.split("/").pop(),
        type: mime.getType(file.uri)!,
      });
      data.append("user", JSON.stringify(user));
      const response = await ApiDeliveryFormImage.put<ResponseApiDelivery>(
        "/users/update",
        data
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("Error: ", JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
