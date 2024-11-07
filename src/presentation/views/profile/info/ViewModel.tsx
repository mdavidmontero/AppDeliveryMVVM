import { DeleteUserLocalUseCase } from "../../../../domain/useCases/userLocal/DeleteUserLocal";

export const ProfileInfoViewModel = () => {
  const removeSession = async () => {
    await DeleteUserLocalUseCase();
  };

  return {
    removeSession,
  };
};

export default ProfileInfoViewModel;
