import React from "react";
import { Product } from "../../entities/Product";
import { ProductRepositoryImpl } from "../../../data/repositories/ProductRepository";

const { update } = new ProductRepositoryImpl();

export const UpdateProductUseCase = async (product: Product) => {
  return await update(product);
};
