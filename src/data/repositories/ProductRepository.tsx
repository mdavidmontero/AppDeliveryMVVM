import { AxiosError } from "axios";
import { ImageInfo } from "expo-image-picker";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import mime from "mime";
import {
  ApiDelivery,
  ApiDeliveryFormImage,
} from "../sources/remote/api/ApiDelivery";
import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";

export class ProductRepositoryImpl implements ProductRepository {
  async getProductsByCategory(idCategory: string): Promise<Product[]> {
    try {
      const response = await ApiDelivery.get<Product[]>(
        `/products/findByCategory/${idCategory}`
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }

  async create(
    product: Product,
    files: ImageInfo[]
  ): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();

      files.forEach((file) => {
        // @ts-ignore
        data.append("image", {
          uri: file.uri,
          name: file.uri.split("/").pop(),
          type: mime.getType(file.uri)!,
        });
      });

      data.append("product", JSON.stringify(product));
      const response = await ApiDeliveryFormImage.post<ResponseApiDelivery>(
        "/products/create",
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

  async update(product: Product): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.put<ResponseApiDelivery>(
        "/products/update",
        product
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
    product: Product,
    files: ImageInfo[]
  ): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();

      files.forEach((file) => {
        // @ts-ignore
        data.append("image", {
          uri: file.uri,
          name: file.uri.split("/").pop(),
          type: mime.getType(file.uri)!,
        });
      });

      data.append("product", JSON.stringify(product));
      const response = await ApiDeliveryFormImage.put<ResponseApiDelivery>(
        "/products/updateWithImage",
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

  async remove(product: Product): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.delete<ResponseApiDelivery>(
        `/products/delete/${product.id}`
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
