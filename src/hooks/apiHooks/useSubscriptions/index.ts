import { useApi } from "hooks/useApi";
import { emptyRequest } from "services/api";
import subscriptionApi from "services/api/subscriptionApi";
import { Subscription } from "types/entities/Subscription";

const useSubscription = () => {
  function userSubscriptions(userId?: string | number) {
    const {
      refetch,
      isLoading,
      data: subscriptions,
    } = useApi<Subscription[]>({
      key: "userSubscriptions",
      fetchMethod: () => {
        if (!userId) return emptyRequest();
        return subscriptionApi.getUserSubscription(userId);
      },
    });

    return { subscriptions, refetch, isLoading };
  }
  async function cancelSubscription(id: string | number) {
    const { data } = await subscriptionApi.cancelSubscription(id);

    return data;
  }

  return {
    userSubscriptions,
    cancelSubscription,
  };
};

export default useSubscription;
