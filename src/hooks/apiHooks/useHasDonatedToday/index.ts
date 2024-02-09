import { useApi } from "hooks/useApi";
import usersApi from "services/api/usersApi";
import CanDonate from "types/apiResponses/CanDonate";

function useHasDonatedToday() {
  const {
    data: hasDonatedToday,
    isLoading,
    refetch,
  } = useApi<CanDonate>({
    key: "canDonate",
    fetchMethod: () => usersApi.getHasDonatedToday(),
  });

  return {
    hasDonatedToday,
    isLoading,
    refetch,
  };
}

export default useHasDonatedToday;
