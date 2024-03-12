import { useApi } from "hooks/useApi";
import userSubscriptionApi from "services/user/userSubscriptionApi";
import IsMember from "types/apiResponses/IsMember";

function useUserSubscription() {
  function userIsMember() {
    const { refetch, isLoading, data } = useApi<IsMember>({
      key: "UserIsMember",
      fetchMethod: () => userSubscriptionApi.getIsMember(),
    });

    return { isMember: data?.isMember || false, refetch, isLoading };
  }

  return {
    userIsMember,
  };
}

export default useUserSubscription;
