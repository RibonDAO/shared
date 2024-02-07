import { useApi } from "hooks/useApi";
import userTicketsApi from "services/user/userTicketsApi";
import { UserTickets } from "types/entities/UserTickets";

function useUserTickets() {
  function ticketsAvailable() {
    const { refetch, isLoading, data } = useApi<UserTickets>({
      key: "UserTickets",
      fetchMethod: () => userTicketsApi.getTicketsAvailable(),
    });

    return { tickets: data?.tickets, refetch, isLoading };
  }

  async function donate(
    nonProfitId: number,
    quantity: number,
    platform?: "app" | "web",
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ) {
    return await userTicketsApi.postTicketsDonation(
      nonProfitId,
      quantity,
      platform,
      utmSource,
      utmMedium,
      utmCampaign,
    );
  }

  return {
    donate,
    ticketsAvailable,
  };
}

export default useUserTickets;
