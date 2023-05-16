import legacyUserImpactApi from "services/api/legacyImpactApi";
import { useApi } from "hooks/useApi";
import LegacyContribution from "types/entities/LegacyContribution";

function useLegacyContributions(userId: number | undefined) {
  const {
    data: legacyContributions,
    refetch,
    error,
    isLoading,
  } = useApi<LegacyContribution[]>({
    key: "legacyContributions",
    fetchMethod: () => {
      const id = userId || null;
      return legacyUserImpactApi.getContributions(id);
    },
    options: {
      enabled: !!userId,
    },
    criteria: [userId],
  });

  return {
    legacyContributions,
    refetch,
    error,
    isLoading,
  };
}

export default useLegacyContributions;
