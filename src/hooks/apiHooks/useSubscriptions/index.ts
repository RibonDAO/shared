import { useApi } from "hooks/useApi";
import { emptyRequest } from "services/api";
import subscriptionApi from "services/api/subscriptionApi";
import { usersApi } from "services/index";
import Subscription from "types/entities/Subscription";

const useSubscription = () => {
  function userSubscriptions(userId: string | number) {
    const {
      refetch,
      isLoading,
      data: subscriptions,
    } = useApi<Subscription[]>({
      key: "userSubscriptions",
      fetchMethod: () => {
        if (!userId) return emptyRequest();
        return usersApi.getUserSubscription(userId);
      },
    });

    return { subscriptions, refetch, isLoading };
  }
  async function sendCancelSubscriptionEmail(id: string | number) {
    const { data } = await usersApi.postSendCancelSubscriptionEmail(id);

    return data;
  }

  const cancelSubscription = async (token: string) => {
    try {
      const { data: subscription } = await subscriptionApi.putCancelSubscription(
        token
      );

      return subscription;
    } catch (e) {
      return false;
    }
  };

  function getSubscription(id?: string | number) {
    const {
      refetch,
      isLoading,
      data: subscription,
    } = useApi<Subscription>({
      key: "userSubscriptions",
      fetchMethod: () => {
        if (!id) return emptyRequest();
        return subscriptionApi.getSubscription(id);
      },
    });

    return { subscription, refetch, isLoading };
  }

  return {
    userSubscriptions,
    sendCancelSubscriptionEmail,
    cancelSubscription,
    getSubscription,
  };
};

export default useSubscription;
