import { useApi } from "hooks/useApi";
import { emptyRequest } from "services/api";
import subscriptionApi from "services/api/subscriptionApi";
import { Subscription } from "types/entities/Subscription";

const useSubscription = () => {
  function userSubscriptions(userId?: string | number) {
    const {
      refetch,
      isLoading,
      data,
    } = useApi<Subscription[]>({
      key: "userSubscriptions",
      fetchMethod: () => {
        if (!userId) return emptyRequest();
        return subscriptionApi.getUserSubscription(userId);
      },
    });

    return { data, refetch, isLoading };
  }
  async function sendCancelSubscriptionEmail(id: string | number) {
    const { data } = await subscriptionApi.sendCancelSubscriptionEmail(id);
    console.log(data);
    return data;
  }

  return {
    userSubscriptions,
    sendCancelSubscriptionEmail,
  };
};

export default useSubscription;
