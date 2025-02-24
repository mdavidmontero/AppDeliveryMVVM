import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Rol } from "../../../domain/entities/Rol";
import { MyColors } from "../../theme/AppTheme";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
interface Props {
  rol: Rol;
  height: number;
  width: number;
  navigation: StackNavigationProp<RootStackParamList, "RolesScreen", undefined>;
}
const RolesItem = ({ rol, height, width, navigation }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (rol.name == "ADMIN") {
          console.log("SELECCIONO ADMIN");
          navigation.replace("AdminTabsNavigator");
        } else if (rol.name == "CLIENTE") {
          console.log("SELECCIONO CLIENTE");
          navigation.replace("ClientTabsNavigator");
        } else if (rol.name == "REPARTIDOR") {
          console.log("SELECCIONO REPARTIDOR");

          // navigation.replace('DeliveryTabsNavigator');
        }
      }}
      style={{ ...styles.container, height: height, width: width }}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: rol.image }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{rol.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RolesItem;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 18,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  titleContainer: {
    height: 50,
    backgroundColor: MyColors.primary,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
  },
});
