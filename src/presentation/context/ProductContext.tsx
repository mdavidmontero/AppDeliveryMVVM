import * as ImagePicker from "expo-image-picker";
import { createContext } from "react";
import { useState } from "react";
import { Product } from "../../domain/entities/Product";
import { ResponseApiDelivery } from "../../data/sources/remote/models/ResponseApiDelivery";
import { CreateProductUseCase } from "../../domain/useCases/product/CreateProduct";
import { UpdateProductUseCase } from "../../domain/useCases/product/UpdateProduct";
import { UpdateWithImageProductUseCase } from "../../domain/useCases/product/UpdateWithImageProduct";
import { DeleteProductUseCase } from "../../domain/useCases/product/DeleteProduct";
import { GetProductsByCategoryUseCase } from "../../domain/useCases/product/GetProductsByCategory";

export interface ProductContextProps {
  products: Product[];
  getProducts(idCategory: string): Promise<void>;
  create(
    product: Product,
    files: ImagePicker.ImageInfo[]
  ): Promise<ResponseApiDelivery>;
  updateWithImage(
    product: Product,
    files: ImagePicker.ImageInfo[]
  ): Promise<ResponseApiDelivery>;
  update(product: Product): Promise<ResponseApiDelivery>;
  remove(product: Product): Promise<ResponseApiDelivery>;
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async (idCategory: string): Promise<void> => {
    const result = await GetProductsByCategoryUseCase(idCategory);
    setProducts(result);
  };

  const create = async (
    product: Product,
    files: ImagePicker.ImageInfo[]
  ): Promise<ResponseApiDelivery> => {
    const response = await CreateProductUseCase(product, files);
    getProducts(product.id_category!);
    return response;
  };

  const update = async (product: Product): Promise<ResponseApiDelivery> => {
    const response = await UpdateProductUseCase(product);
    getProducts(product.id_category!);
    return response;
  };

  const updateWithImage = async (
    product: Product,
    files: ImagePicker.ImageInfo[]
  ) => {
    const response = await UpdateWithImageProductUseCase(product, files);
    getProducts(product.id_category!);
    return response;
  };

  const remove = async (product: Product): Promise<ResponseApiDelivery> => {
    const response = await DeleteProductUseCase(product);
    getProducts(product.id_category!);
    return response;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        create,
        updateWithImage,
        update,
        remove,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
