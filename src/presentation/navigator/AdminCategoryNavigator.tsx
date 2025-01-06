import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CategoryProvider } from "../context/CategoryContext";
import { AdminCategoryCreateScreen } from "../views/admin/category/create/CategoryCreate";
import { Image, TouchableOpacity } from "react-native";
import { Category } from "../../domain/entities/Category";
import { AdminCategoryUpdateScreen } from "../views/admin/category/update/CategoryUpdate";
import { AdminCategoryListScreen } from "../views/admin/category/list/CategoryList";
import { AdminProductNavigator } from "./AdminProductNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export type CategoryStackParamList = {
  AdminCategoryListScreen: undefined;
  AdminCategoryCreateScreen: undefined;
  AdminCategoryUpdateScreen: { category: Category };
  AdminProductNavigator: { category: Category };
};

const Stack = createNativeStackNavigator<CategoryStackParamList>();

export const AdminCategoryNavigator = () => {
  const navigation =
    useNavigation<StackNavigationProp<CategoryStackParamList>>();
  return (
    <CategoryState>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="AdminCategoryListScreen"
          component={AdminCategoryListScreen}
          options={({ route }) => ({
            headerShown: true,
            title: "Categorias",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("AdminCategoryCreateScreen")}
              >
                <Image
                  source={require("../../../assets/add.png")}
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="AdminCategoryCreateScreen"
          component={AdminCategoryCreateScreen}
          options={{
            headerShown: true,
            title: "Nueva categoria",
          }}
        />

        <Stack.Screen
          name="AdminCategoryUpdateScreen"
          component={AdminCategoryUpdateScreen}
          options={{
            headerShown: true,
            title: "Editar categoria",
          }}
        />

        <Stack.Screen
          name="AdminProductNavigator"
          component={AdminProductNavigator}
        />
      </Stack.Navigator>
    </CategoryState>
  );
};

const CategoryState = ({ children }: any) => {
  return <CategoryProvider>{children}</CategoryProvider>;
};
