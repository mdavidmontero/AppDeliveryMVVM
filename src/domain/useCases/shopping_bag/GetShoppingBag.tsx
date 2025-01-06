import React from "react";
import { ShoppingBagRepositoryImpl } from "../../../data/repositories/ShoppingBagRepository";

const { getShoppingBag } = new ShoppingBagRepositoryImpl();

export const GetShoppingBagUseCase = async () => {
  return await getShoppingBag();
};
