import offersApi from "services/api/offersApi";
import Offer from "types/entities/Offer";
import { Categories } from "types/enums/Categories";
import { Currencies } from "types/enums/Currencies";
import { useApi } from "../../useApi";

function useOffers(
  currency: Currencies,
  subscription = false,
  category = Categories.DIRECT_CONTRIBUTION,
) {
  const {
    data: offers,
    isLoading,
    refetch,
  } = useApi<Offer[]>({
    key: "offers",
    fetchMethod: () => offersApi.getOffers(currency, subscription, category),
    criteria: [currency, subscription, category],
    options: {
      enabled: !!currency,
    },
  });

  async function getOffer(offerId: number) {
    const { data: offer } = await offersApi.getOffer(offerId);

    return offer;
  }

  return {
    offers: offers || [],
    getOffer,
    isLoading,
    refetch,
  };
}

export default useOffers;
