import { useState } from "react";
import { RegisterAuthUseCase } from "../../../domain/useCases/auth/RegisterAuth";
import { RegisterWithImageAuthUseCase } from "../../../domain/useCases/auth/RegisterWithImageAuth";
import * as ImagePicker from "expo-image-picker";

const RegisterViewModel = () => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    image: "",
    password: "",
    confirmPassword: "",
  });

  const [file, setFile] = useState<ImagePicker.ImageInfo>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      onChange("image", result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const [errorMessage, setErrorMessage] = useState("");
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      // const response = await RegisterAuthUseCase(values);
      const response = await RegisterWithImageAuthUseCase(values, file!);
      console.log("Result: ", JSON.stringify(response));
    }
  };
  const isValidForm = (): boolean => {
    if (values.name === "") {
      setErrorMessage("Ingresa tu nombre");
      return false;
    }
    if (values.lastname === "") {
      setErrorMessage("Ingresa tus apellidos");
      return false;
    }
    if (values.email === "") {
      setErrorMessage("Ingresa tu correo electrónico");
      return false;
    }
    if (values.phone === "") {
      setErrorMessage("Ingresa tu telefono");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("Ingresa la contraseña");
      return false;
    }
    if (values.confirmPassword === "") {
      setErrorMessage("Ingresa la confirmación de la contraseña");
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return false;
    }
    if (values.image === "") {
      setErrorMessage("Seleccione una Imagen");
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    register,
    errorMessage,
    pickImage,
    file,
    takePhoto,
  };
};

export default RegisterViewModel;
