import { View, Text } from "react-native";
import { useUserLocal } from "../../hooks/useUserLocal";
const RolesViewModel = () => {
  const { user } = useUserLocal();
  return {
    user,
  };
};
export default RolesViewModel;
