import { AxiosResponse } from "axios";
import { Subscription } from "types/entities/Subscription";

import { apiGet, apiPost, apiPut } from "..";

const subscriptionApi = {
  getUserSubscription: (
    userId: string | number,
  ): Promise<AxiosResponse<Subscription[]>> =>
    apiGet(`payments/subscriptions_for_customer/${userId}`),

    postSendCancelSubscriptionEmail: (
      id: string | number
      ): Promise<AxiosResponse<{}>> =>
    apiPost("payments/send_cancel_subscription_email", {id}),

    putCancelSubscription: (id: string | number): Promise<AxiosResponse<any>> =>
    apiPut(`payments/cancel_subscription/${id}`, {}),
};

export default subscriptionApi;
