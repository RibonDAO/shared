import { useApi } from "hooks/useApi";
import userSubscriptionApi from "services/user/userSubscriptionApi";

function useUserSubscription() {
  function userIsMember() {
    const {
      refetch,
      isLoading,
      data: isMember,
    } = useApi<any>({
      key: "UserIsMember",
      fetchMethod: () => userSubscriptionApi.getIsMember(),
    });

    return { isMember, refetch, isLoading };
  }

  return {
    userIsMember,
  };
}

export default useUserSubscription;
