import { useApi } from "hooks/useApi";
import { emptyRequest } from "services/api";
import subscriptionApi from "services/api/subscriptionApi";
import { Subscription } from "types/entities/Subscription";

const useSubscription = () => {
  function userSubscriptions(id?: string | number) {
    const {
      refetch,
      isLoading,
      data: subscriptions,
    } = useApi<Subscription>({
      key: "userSubscriptions",
      fetchMethod: () => {
        if (!id) return emptyRequest();
        return subscriptionApi.getUserSubscription(id);
      },
    });

    return { subscriptions, refetch, isLoading };
  }
  async function cancelSubscription(subscriptionId: string | number) {
    const { data } = await subscriptionApi.deleteSubscription(subscriptionId);

    return data;
  }

  return {
    userSubscriptions,
    cancelSubscription,
  };
};

export default useSubscription;
