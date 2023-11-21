import { UserConfig } from "types/entities";
import userConfigApi from "services/user/userConfigApi";

function useUserV1Config() {
  async function updateUserConfig(data: UserConfig) {
    await userConfigApi.postUpdateUserConfig(data);
  }

  return {
    updateUserConfig,
  };
}

export default useUserV1Config;
