import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/presentation/views/home/Home";
import { RegisterScreen } from "./src/presentation/views/register/Register";
import { RolesScreen } from "./src/presentation/views/roles/Roles";
import { AdminTabsNavigator } from "./src/presentation/navigator/AdminTabsNavigator";
import { ClientTabsNavigator } from "./src/presentation/navigator/ClientTabsNavigator";
import { ProfileUpdateScreen } from "./src/presentation/views/profile/update/ProfileUpdate";
import { User } from "./src/domain/entities/User";
import { UserProvider } from "./src/presentation/context/UserContext";

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  RolesScreen: undefined;
  AdminTabsNavigator: undefined;
  ClientTabsNavigator: undefined;
  ProfileInfoScreen: undefined;
  ProfileUpdateScreen: { user: User };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <UserState>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ headerShown: true, title: "Registro" }}
          />
          <Stack.Screen
            name="RolesScreen"
            component={RolesScreen}
            options={{ headerShown: true, title: "Selecciona un rol" }}
          />
          <Stack.Screen
            name="AdminTabsNavigator"
            component={AdminTabsNavigator}
          />
          <Stack.Screen
            name="ClientTabsNavigator"
            component={ClientTabsNavigator}
          />
          <Stack.Screen
            name="ProfileUpdateScreen"
            component={ProfileUpdateScreen}
            options={{ headerShown: true, title: "Actualizar Perfil" }}
          />
        </Stack.Navigator>
      </UserState>
    </NavigationContainer>
  );
};

const UserState = ({ children }: any) => {
  return <UserProvider>{children}</UserProvider>;
};

export default App;
