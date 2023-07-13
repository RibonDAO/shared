import { useApi } from "hooks/useApi";
import { Currencies } from "types/enums/Currencies";
import CardFees from "types/apiResponses/CardFees";
import givingFeesApi from "services/api/givingFeesApi";

function useCardGivingFees(value: number, currency: Currencies, gateway?: string) {
  const {
    data: cardGivingFees,
    isLoading,
    refetch,
  } = useApi<CardFees>({
    key: "cardGivingFees",
    fetchMethod: () => givingFeesApi.postCardFees(value, currency, gateway),
    options: {
      enabled: value > 0,
    },
    criteria: [value, currency],
  });

  return { cardGivingFees, isLoading, refetch };
}

export default useCardGivingFees;
