import legacyUserImpactApi from "services/api/legacyImpactApi";
import { useApi } from "hooks/useApi";
import LegacyUserImpact from "types/entities/LegacyUserImpact";

function useLegacyImpact(userId: number | undefined) {
  const {
    data: legacyUserImpact,
    refetch,
    error,
    isLoading,
  } = useApi<LegacyUserImpact[]>({
    key: "legacyImpacts",
    fetchMethod: () => {
      const id = userId || null;
      return legacyUserImpactApi.getImpact(id);
    },
    options: {
      enabled: !!userId,
    },
    criteria: [userId],
  });

  return {
    legacyUserImpact,
    refetch,
    error,
    isLoading,
  };
}

export default useLegacyImpact;
