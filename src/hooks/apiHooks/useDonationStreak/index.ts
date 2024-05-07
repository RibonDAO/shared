import { useApi } from "hooks/useApi";
import { userDonationApi } from "services/index";
import { DonationStreak } from "types/apiResponses/DonationStreak";

function useDonationStreak() {
  const { data, isLoading, refetch } = useApi<DonationStreak>({
    key: "DonationStreak",
    fetchMethod: () => userDonationApi.getStreak(),
  });

  return {
    streak: data?.streak || 0,
    isLoading,
    refetch,
  };
}

export default useDonationStreak;
