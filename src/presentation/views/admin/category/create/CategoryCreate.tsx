import { useState } from "react";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
import styles from "./Styles";
import useViewModel from "./ViewModel";
import { MyColors, MyStyles } from "../../../../theme/AppTheme";
import { ModalPickImage } from "../../../../components/ModalPickImage";
import { RoundedButton } from "../../../../components/RoundedButton";
import { CustomTextInput } from "../../../../components/CustomTextInput";
export const AdminCategoryCreateScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    name,
    description,
    loading,
    image,
    onChange,
    takePhoto,
    pickImage,
    createCategory,
  } = useViewModel();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => setModalVisible(true)}
      >
        {image == "" ? (
          <Image
            style={styles.image}
            source={require("../../../../../../assets/image_new.png")}
          />
        ) : (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      </TouchableOpacity>

      <View style={styles.form}>
        <CustomTextInput
          placeholder="Nombre de la categoria"
          image={require("../../../../../../assets/categories.png")}
          keyboardType="default"
          property="name"
          value={name}
          onChangeText={onChange}
        />
        <CustomTextInput
          placeholder="Descripcion"
          image={require("../../../../../../assets/description.png")}
          keyboardType="default"
          property="description"
          value={description}
          onChangeText={onChange}
        />
      </View>

      <View style={styles.buttonContainer}>
        <RoundedButton
          text="CREAR CATEGORIA"
          onPress={() => createCategory()}
        />
      </View>

      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
      />

      {loading && (
        <ActivityIndicator
          style={MyStyles.loading}
          size="large"
          color={MyColors.primary}
        />
      )}
    </View>
  );
};
