import {
  ApiDelivery,
  ApiDeliveryFormImage,
} from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";
import { AxiosError } from "axios";
import { Category } from "../../domain/entities/Category";
import { CategoryRepository } from "../../domain/repositories/CategoryRepository";

export class CategoryRepositoryImpl implements CategoryRepository {
  async getAll(): Promise<Category[]> {
    try {
      const response = await ApiDelivery.get<Category[]>("/categories/getAll");
      console.log("CATEGORIES: " + JSON.stringify(response.data));

      return Promise.resolve(response.data);
    } catch (error) {
      console.log(error);
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }

  async create(
    category: Category,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();
      // @ts-ignore
      data.append("image", {
        uri: file.uri,
        name: file.uri.split("/").pop(),
        type: mime.getType(file.uri)!,
      });
      data.append("category", JSON.stringify(category));
      const response = await ApiDeliveryFormImage.post<ResponseApiDelivery>(
        "/categories/create",
        data
      );
      return Promise.resolve(response.data);
    } catch (error) {
      console.log(error);
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async update(category: Category): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.put<ResponseApiDelivery>(
        "/categories/update",
        category
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async updateWithImage(
    category: Category,
    file: ImagePicker.ImageInfo
  ): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();
      // @ts-ignore
      data.append("image", {
        uri: file.uri,
        name: file.uri.split("/").pop(),
        type: mime.getType(file.uri)!,
      });
      data.append("category", JSON.stringify(category));
      const response = await ApiDeliveryFormImage.put<ResponseApiDelivery>(
        "/categories/updateWithImage",
        data
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async remove(id: string): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.delete<ResponseApiDelivery>(
        `/categories/delete/${id}`
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
