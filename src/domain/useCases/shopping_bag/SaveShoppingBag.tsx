import React from "react";
import { Product } from "../../entities/Product";
import { ShoppingBagRepositoryImpl } from "../../../data/repositories/ShoppingBagRepository";

const { save } = new ShoppingBagRepositoryImpl();

export const SaveShoppingBagUseCase = async (products: Product[]) => {
  return await save(products);
};
