import { Text, View, Image, TouchableOpacity } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from "./Styles";
export const HomeScreen = () => {
  const { email, password, onChange } = useViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/chef.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/logo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="Correo Electrónico"
          value={email}
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
        />
        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="Contraseña"
          value={password}
          keyboardType="default"
          secureTextEntry={true}
          property="password"
          onChangeText={onChange}
        />
        <View style={{ marginTop: 30 }}>
          <RoundedButton
            onPress={() => {
              console.log(email, password);
            }}
            text="Ingresar"
          />
        </View>
        <View style={styles.formRegister}>
          <Text>No tienes Cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
