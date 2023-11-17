import { UserConfig } from "types/entities";
import userConfigApi from "services/user/userConfigApi";

function useUserV1Config() {
  async function updateUserConfig(data: UserConfig) {
    await userConfigApi.postUpdateUserConfig(data);
  }

  async function sendDeleteAccountEmail() {
    await userConfigApi.postSendDeleteAccountEmail();
  }

  async function deleteUser(token: string) {
    await userConfigApi.deleteUser(token);
  }

  return {
    updateUserConfig,
    sendDeleteAccountEmail,
    deleteUser,
  };
}

export default useUserV1Config;
