import { AxiosResponse } from "axios";
import { Subscription } from "types/entities/Subscription";

import { apiGet, apiPut } from "..";

const subscriptionApi = {
  getUserSubscription: (
    id: string | number,
  ): Promise<AxiosResponse<Subscription[]>> =>
    apiGet(`payments/subscriptions_for_customer/${id}`),

  cancelSubscription: (
    subscriptionId: string | number,
  ): Promise<AxiosResponse<any>> =>
    apiPut(`payments/cancel_subscription/${subscriptionId}`, {}),
};

export default subscriptionApi;
