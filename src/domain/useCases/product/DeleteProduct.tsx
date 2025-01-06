const { remove } = new ProductRepositoryImpl();

import React from "react";
import { Product } from "../../entities/Product";
import { ProductRepositoryImpl } from "../../../data/repositories/ProductRepository";

export const DeleteProductUseCase = async (product: Product) => {
  return await remove(product);
};
