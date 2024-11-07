import { useEffect, useState } from "react";
import { LoginAuthUseCase } from "../../../domain/useCases/auth/LoginAuth";
import { saveUserUseCase } from "../../../domain/useCases/userLocal/SaveUser";
import { getUserUseCase } from "../../../domain/useCases/userLocal/GetUser";

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    getUserSession();
  }, []);

  const getUserSession = async () => {
    const user = await getUserUseCase();
    console.log("usuario session: ", JSON.stringify(user));
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log("Response: ", JSON.stringify(response));
      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        await saveUserUseCase(response.data);
        // await getUserUseCase();
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
  };
};

export default HomeViewModel;
