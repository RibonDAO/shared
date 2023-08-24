import { AxiosResponse } from "axios";
import { Subscription } from "types/entities/Subscription";

import { apiGet, apiPost } from "..";

const subscriptionApi = {
  getUserSubscription: (
    userId: string | number,
  ): Promise<AxiosResponse<Subscription[]>> =>
    apiGet(`payments/subscriptions_for_customer/${userId}`),

    sendCancelSubscriptionEmail: (
      id: string | number
      ): Promise<AxiosResponse<{}>> =>
    apiPost("payments/send_cancel_subscription_email", {id}),
};

export default subscriptionApi;
