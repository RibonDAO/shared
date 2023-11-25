import { UserConfig } from "types/entities";
import { useApi } from "hooks/useApi";
import userConfigApi from "services/user/userConfigApi";

function useUserV1Config() {
  async function updateUserConfig(data: UserConfig) {
    await userConfigApi.postUpdateUserConfig(data);
  }

  const {
    refetch,
    isLoading,
    data: userConfig,
  } = useApi<UserConfig>({
    key: "UserConfig",
    fetchMethod: () => userConfigApi.getUserConfig(),
  });

  return {
    updateUserConfig,
    refetch,
    isLoading,
    userConfig,
  };
}

export default useUserV1Config;
