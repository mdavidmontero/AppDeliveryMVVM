import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
export const ProfileInfoViewModel = () => {
  const { user, removeUserSession } = useContext(UserContext);
  const removeSession = async () => {
    await removeUserSession();
  };

  return {
    removeSession,
    user,
  };
};

export default ProfileInfoViewModel;
