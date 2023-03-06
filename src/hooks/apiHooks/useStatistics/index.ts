import { useApi } from "hooks/useApi";
import UserStatistics from "types/entities/UserStatistics";
import { emptyRequest } from "services/api";
import usersApi from "services/api/usersApi";

type Props = {
  userId?: number;
  walletAddress?: string;
};

function useStatistics({ userId, walletAddress }: Props) {
  const {
    data: userStatistics,
    refetch,
    error,
    isLoading,
  } = useApi<UserStatistics>({
    key: "statistics",
    fetchMethod: () => {
      if (!userId && !walletAddress) return emptyRequest();
      return usersApi.getUserStatistics(
        userId || undefined,
        walletAddress ? window.btoa(walletAddress.toLowerCase()) : undefined,
      );
    },
    criteria: [userId, walletAddress],
    options: {
      enabled: !!userId || !!walletAddress,
    },
  });

  return {
    userStatistics,
    refetch,
    error,
    isLoading,
  };
}

export default useStatistics;
