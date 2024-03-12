import { useApi } from "hooks/useApi";
import userTicketsApi from "services/user/userTicketsApi";
import TicketsToCollect from "types/entities/TicketsToCollect";

function useUserTickets() {
  function getTicketsToCollect(source: string) {
    const { refetch, isLoading, data } = useApi<TicketsToCollect>({
      key: "UserTicketsToCollect",
      fetchMethod: () => userTicketsApi.getTicketsToCollect(source),
    });

    return {
      toCollect: data,
      refetch,
      isLoading,
    };
  }

  async function donate(
    nonProfitId: number,
    quantity: number,
    platform?: "app" | "web",
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ) {
    return userTicketsApi.postTicketsDonation(
      nonProfitId,
      quantity,
      platform,
      utmSource,
      utmMedium,
      utmCampaign,
    );
  }

  async function collectByClub(platform: string, category: string) {
    const { data } = await userTicketsApi.collectByClub(platform, category);

    return data;
  }

  return {
    donate,
    collectByClub,
    getTicketsToCollect,
  };
}

export default useUserTickets;
