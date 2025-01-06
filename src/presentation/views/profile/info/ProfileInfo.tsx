import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import useViewModel from "./ViewModel";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { RoundedButton } from "../../../components/RoundedButton";
import { useEffect } from "react";

const ProfileInfoScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { removeSession, user } = useViewModel();

  useEffect(() => {
    if (user.id === "") {
      navigation.replace("HomeScreen");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      {/* <Button
        title="Cerrar Sesión"
        onPress={() => {
          removeSession();
          navigation.navigate("HomeScreen");
        }}
      /> */}
      <Image
        source={require("../../../../../assets/city.jpg")}
        style={styles.imageBackground}
      />
      <TouchableOpacity
        style={styles.logout}
        onPress={() => {
          removeSession();
        }}
      >
        <Image
          source={require("../../../../../assets/cerrar-sesion.png")}
          style={styles.imageLogout}
        />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        {user?.image !== "" && (
          <Image source={{ uri: user?.image }} style={styles.logoImage} />
        )}
      </View>
      <View style={styles.form}>
        <View style={styles.formInfo}>
          <Image
            source={require("../../../../../assets/user.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>
              {user?.name} {user?.lastname}
            </Text>
            <Text style={styles.formTextDescription}>Nombre del usuario</Text>
          </View>
        </View>
        <View style={{ ...styles.formInfo, marginTop: 25 }}>
          <Image
            source={require("../../../../../assets/email.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>
              {user?.name} {user?.email}
            </Text>
            <Text style={styles.formTextDescription}>Correo electronico</Text>
          </View>
        </View>
        <View style={{ ...styles.formInfo, marginTop: 25, marginBottom: 70 }}>
          <Image
            source={require("../../../../../assets/phone.png")}
            style={styles.formImage}
          />
          <View style={styles.formContent}>
            <Text>
              {user?.name} {user?.phone}
            </Text>
            <Text style={styles.formTextDescription}>Telefono</Text>
          </View>
        </View>
        <RoundedButton
          onPress={() =>
            navigation.navigate("ProfileUpdateScreen", { user: user! })
          }
          text="ACTUALIZAR INFORMACION"
        />
      </View>
    </View>
  );
};

export default ProfileInfoScreen;
