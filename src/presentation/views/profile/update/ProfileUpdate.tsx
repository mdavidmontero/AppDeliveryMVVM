import {
  Image,
  View,
  Text,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { RoundedButton } from "../../../components/RoundedButton";
import useViewModel from "./ViewModel";
import { CustomTextInput } from "../../../components/CustomTextInput";
import styles from "./Styles";
import { useEffect, useState } from "react";
import { ModalPickImage } from "../../../components/ModalPickImage";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../../App";
import { MyColors } from "../../../theme/AppTheme";

interface Props
  extends StackScreenProps<RootStackParamList, "ProfileUpdateScreen"> {}
export const ProfileUpdateScreen = ({ navigation, route }: Props) => {
  const { user } = route.params;
  const {
    name,
    lastname,
    phone,
    image,
    update,
    onChange,
    errorMessage,
    successMessage,
    pickImage,
    takePhoto,
    loading,
  } = useViewModel(user);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (errorMessage != "") {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);
  useEffect(() => {
    if (successMessage != "") {
      ToastAndroid.show(successMessage, ToastAndroid.LONG);
    }
  }, [successMessage]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../../assets/city.jpg")}
        style={styles.imageBackground}
      />

      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {image === "" ? (
            <Image source={{ uri: user?.image }} style={styles.logoImage} />
          ) : (
            <Image source={{ uri: image }} style={styles.logoImage} />
          )}
        </TouchableOpacity>

        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>ACTUALIZAR INFORMACION</Text>

          <CustomTextInput
            image={require("../../../../../assets/user.png")}
            placeholder="Nombres"
            value={name}
            keyboardType="default"
            property="name"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../../assets/my_user.png")}
            placeholder="Apellidos"
            value={lastname}
            keyboardType="default"
            property="lastname"
            onChangeText={onChange}
          />

          <CustomTextInput
            image={require("../../../../../assets/phone.png")}
            placeholder="Telefono"
            value={phone}
            keyboardType="numeric"
            property="phone"
            onChangeText={onChange}
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton text="CONFIRMAR" onPress={() => update()} />
          </View>
        </ScrollView>
      </View>
      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUsestate={modalVisible}
        setmodalUseState={setModalVisible}
      />
      {loading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color={MyColors.primary}
        />
      )}
    </View>
  );
};
