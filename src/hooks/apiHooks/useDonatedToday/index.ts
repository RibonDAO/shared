import { useApi } from "hooks/useApi";
import usersApi from "services/api/usersApi";
import CanDonate from "types/apiResponses/CanDonate";

function useDonatedToday() {
  const {
    data: donatedToday,
    isLoading,
    refetch,
  } = useApi<CanDonate>({
    key: "canDonate",
    fetchMethod: () => usersApi.getDonatedToday(),
  });

  return {
    donatedToday,
    isLoading,
    refetch,
  };
}

export default useDonatedToday;
