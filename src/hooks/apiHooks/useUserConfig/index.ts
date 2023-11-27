import { UserConfig } from "types/entities";
import userConfigApi from "services/api/userConfigApi";
import { useApi } from "hooks/useApi";

function useUserConfig() {
  function userConfig() {
    const {
      refetch,
      isLoading,
      data: config,
    } = useApi<UserConfig>({
      key: "UserConfig",
      fetchMethod: () => userConfigApi.getUserConfig(),
    });

    return { config, refetch, isLoading };
  }

  async function updateUserConfig(userId: number, data: UserConfig) {
    const { data: config } = await userConfigApi.postUpdateUserConfig(userId, data);
    return config;
  }

  return {
    userConfig,
    updateUserConfig,
  };
}

export default useUserConfig;
