import { useApi } from "hooks/useApi";
import UserStatistics from "types/entities/UserStatistics";
import { emptyRequest } from "services/api";
import usersApi from "services/api/usersApi";

type Props = {
  userId?: number;
};

function useStatistics({ userId }: Props) {
  const {
    data: userStatistics,
    refetch,
    error,
    isLoading,
  } = useApi<UserStatistics>({
    key: "statistics",
    fetchMethod: () => {
      if (!userId) return emptyRequest();
      return usersApi.getUserStatistics(userId);
    },
    options: {
      enabled: !!userId,
    },
    criteria: [userId],
  });

  return {
    userStatistics,
    refetch,
    error,
    isLoading,
  };
}

export default useStatistics;
