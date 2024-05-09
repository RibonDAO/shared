import { useApi } from "hooks/useApi";
import { usersApi } from "services/index";
import { UserDonationStreak } from "types/apiResponses/UserDonationStreak";

function useUserDonationStreak() {
  const { data, isLoading, refetch } = useApi<UserDonationStreak>({
    key: "DonationStreak",
    fetchMethod: () => usersApi.getDonationStreak(),
  });

  return {
    streak: data?.streak || 0,
    isLoading,
    refetch,
  };
}

export default useUserDonationStreak;
