import { AxiosResponse } from "axios";

import { apiGet, apiPost, apiPut } from "..";

const subscriptionApi = {
  getSubscription: (id: string | number): Promise<AxiosResponse<any>> =>
    apiGet(`payments/subscription/${id}`),

  postSendCancelSubscriptionEmail: (
    id: string | number,
  ): Promise<AxiosResponse<{}>> =>
    apiPost("payments/send_cancel_subscription_email", { id }),

  putCancelSubscription: (id: string | number): Promise<AxiosResponse<any>> =>
    apiPut(`payments/cancel_subscription/${id}`, {}),
};

export default subscriptionApi;
