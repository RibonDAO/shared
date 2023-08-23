import { AxiosResponse } from "axios";
import { Subscription } from "types/entities/Subscription";

import { apiGet, apiDelete } from "..";

const subscriptionApi = {
  getUserSubscription: (
    id: string | number,
  ): Promise<AxiosResponse<Subscription[]>> =>
    apiGet(`payments/subscriptions_for_customer/${id}`),

  deleteSubscription: (
    subscriptionId: string | number,
  ): Promise<AxiosResponse<any>> =>
    apiDelete(`payments/cancel_subscription/${subscriptionId}`, {}),
};

export default subscriptionApi;
