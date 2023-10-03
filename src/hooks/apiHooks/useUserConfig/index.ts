import { UserConfig } from "types/entities";
import userConfigApi from "services/api/userConfigApi";

function useUserConfig() {
  async function updateUserConfig(userId: number, data: UserConfig) {
    await userConfigApi.postUpdateUserConfig(userId, data);
  }

  return {
    updateUserConfig,
  };
}

export default useUserConfig;
