import { AxiosResponse } from "axios";
import { Subscription } from "types/entities/Subscription";

import { apiGet, apiPut } from "..";

const subscriptionApi = {
  getUserSubscription: (
    userId: string | number,
  ): Promise<AxiosResponse<Subscription[]>> =>
    apiGet(`payments/subscriptions_for_customer/${userId}`),

  cancelSubscription: (id: string | number): Promise<AxiosResponse<any>> =>
    apiPut(`payments/cancel_subscription/${id}`, {}),
};

export default subscriptionApi;
