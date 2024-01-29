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

  return {
    ticketsAvailable,
  };
}

export default useUserTickets;
