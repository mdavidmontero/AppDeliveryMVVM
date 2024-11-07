import { useState } from "react";
import { LoginAuthUseCase } from "../../../domain/useCases/auth/LoginAuth";
import { saveUserLocalUseCase } from "../../../domain/useCases/userLocal/SaveUserLocal";
import { useUserLocal } from "../../hooks/useUserLocal";

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { user, getUserSession } = useUserLocal();

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log("Response: ", JSON.stringify(response));
      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        await saveUserLocalUseCase(response.data);
        getUserSession();
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.email === "") {
      setErrorMessage("Ingresa tu correo electronico");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("Ingresa tu contraseña");
      return false;
    }

    return true;
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };
  return {
    ...values,
    onChange,
    errorMessage,
    login,
    user,
  };
};

export default HomeViewModel;
