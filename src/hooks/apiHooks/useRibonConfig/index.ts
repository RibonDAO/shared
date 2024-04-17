import { useApi } from "hooks/useApi";
import ribonConfigsApi from "services/api/ribonConfigsApi";
import { RibonConfig } from "types/entities";

function useRibonConfig() {
  const {
    data: ribonConfigs,
    isLoading,
    refetch,
    error,
  } = useApi<RibonConfig>({
    key: "ribonConfig",
    fetchMethod: () => ribonConfigsApi.getRibonConfigs(),
    options: {},
    criteria: [],
  });

  return { ribonConfigs, isLoading, refetch, error };
}

export default useRibonConfig;
