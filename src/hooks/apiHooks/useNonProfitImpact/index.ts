import { useApi } from "hooks/useApi";
import { Currencies } from "types/enums/Currencies";
import nonProfitImpactApi from "services/api/nonProfitImpactApi";
import NonProfitImpactResponse from "types/apiResponses/NonProfitImpactResponse";
import { emptyRequest } from "services/api";

function useNonProfitImpact(
  nonProfitId?: number,
  value?: number,
  currency?: Currencies,
) {
  const {
    data: nonProfitImpact,
    isLoading,
    refetch,
  } = useApi<NonProfitImpactResponse>({
    key: `nonProfitImpact${nonProfitId}`,
    fetchMethod: () => {
      if (nonProfitId && value && currency)
        return nonProfitImpactApi.postImpactByNonProfit(
          nonProfitId,
          value,
          currency,
        );

      return emptyRequest();
    },
    options: {
      enabled: !!nonProfitId && !!value && !!currency,
    },
    criteria: [nonProfitId, value, currency],
  });

  return { nonProfitImpact, isLoading, refetch };
}

export default useNonProfitImpact;
