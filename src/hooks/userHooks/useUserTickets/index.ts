import { useApi } from "hooks/useApi";
import userTicketsApi from "services/user/userTicketsApi";
import TicketsToCollect from "types/entities/TicketsToCollect";
import { UserTickets } from "types/entities/UserTickets";

function useUserTickets() {
  function ticketsAvailable() {
    const { refetch, isLoading, data } = useApi<UserTickets>({
      key: "UserTickets",
      fetchMethod: () => userTicketsApi.getTicketsAvailable(),
    });

    return { tickets: data?.tickets, refetch, isLoading };
  }

  function ticketsToCollect() {
    const { refetch, isLoading, data } = useApi<TicketsToCollect>({
      key: "UserTicketsToCollect",
      fetchMethod: () => userTicketsApi.getTicketsToCollect(),
    });

    return {
      data,
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
    ticketsAvailable,
    ticketsToCollect,
    collectByClub,
  };
}

export default useUserTickets;
