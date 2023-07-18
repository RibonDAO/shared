import { emptyRequest } from "services/api";
import { useApi } from "hooks/useApi";
import Contribution from "types/entities/Contribution";
import contributionsApi from "services/api/contributionsApi";

function useContributions(userId?: number) {
  function useLabelableContributions() {
    const { data, error, isLoading, refetch } = useApi<Contribution[]>({
      key: "useLabelableContributions",
      fetchMethod: () => {
        if (!userId) return emptyRequest();

        return contributionsApi.getLabelableContributions(userId);
      },
      criteria: userId,
    });

    return {
      data,
      error,
      isLoading,
      refetch,
    };
  }
  function useUserContributions() {
    const { data, error, isLoading, refetch } = useApi<Contribution[]>({
      key: "useUserContributions",
      fetchMethod: () => {
        if (!userId) return emptyRequest();

        return contributionsApi.getContributions(userId);
      },
      criteria: userId,
    });

    return {
      data,
      error,
      isLoading,
      refetch,
    };
  }

  function useContributionStats(contributionId: number) {
    const { data, error, isLoading, refetch } = useApi<Contribution>({
      key: "useContributionStats",
      fetchMethod: () => {
        if (!userId || !contributionId) return emptyRequest();

        return contributionsApi.getContributionStats(userId, contributionId);
      },
      criteria: contributionId,
    });

    return {
      data,
      error,
      isLoading,
      refetch,
    };
  }
  return {
    useUserContributions,
    useContributionStats,
    useLabelableContributions,
  };
}

export default useContributions;
