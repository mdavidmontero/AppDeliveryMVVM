import { useEffect, useState } from "react";
import { getUserLocalUseCase } from "../../domain/useCases/userLocal/GetUserLocal";
import { User } from "../../domain/entities/User";

export const useUserLocal = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    getUserSession();
  }, []);

  const getUserSession = async () => {
    const user = await getUserLocalUseCase();
    setUser(user);
  };

  return {
    user,
    getUserSession,
  };
};
