import { UserConfig } from "types/entities";
import { useApi } from "hooks/useApi";
import userConfigApi from "services/user/userConfigApi";

const useUserV1Config = () => {
  function userV1Config() {
    const {
      refetch,
      isLoading,
      data: userConfig,
    } = useApi<UserConfig>({
      key: "UserConfig",
      fetchMethod: () => userConfigApi.getUserConfig(),
    });

    return { userConfig, refetch, isLoading };
  }
  async function updateUserConfig(data: UserConfig) {
    const { data: userConfig } = await userConfigApi.postUpdateUserConfig(data);
    return userConfig;
  }

  return {
    updateUserConfig,
    userV1Config,
  };
};

export default useUserV1Config;
