import { useApi } from "hooks/useApi";
import ribonConfigApi from "services/api/ribonConfigApi";
import { RibonConfig } from "types/entities";

function useRibonConfig() {
  const {
    data: ribonConfig,
    isLoading,
    refetch,
    error,
  } = useApi<RibonConfig>({
    key: "ribonConfig",
    fetchMethod: () => ribonConfigApi.getRibonConfig(),
    options: {},
    criteria: [],
  });

  return { ribonConfig, isLoading, refetch, error };
}

export default useRibonConfig;
