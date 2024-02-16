import { useApi } from "hooks/useApi";
import usersApi from "services/api/usersApi";
import DonatedToday from "types/apiResponses/DonatedToday";

function useDonatedToday() {
  const { data, isLoading, refetch } = useApi<DonatedToday>({
    key: "donatedToday",
    fetchMethod: () => usersApi.getDonatedToday(),
  });

  return {
    donatedToday: data?.donatedToday || false,
    isLoading,
    refetch,
  };
}

export default useDonatedToday;
