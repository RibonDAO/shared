import { AxiosResponse } from "axios";

import { apiGet, apiDelete } from "..";

const subscriptionApi = {
  getUserSubscription: (id: string | number): Promise<AxiosResponse<any>> =>
    apiGet(`payments/subscriptions_for_customer/${id}`),

  deleteSubscription: (
    subscriptionId: string | number,
  ): Promise<AxiosResponse<any>> =>
    apiDelete(`payments/cancel_subscription/${subscriptionId}`, {}),
};

export default subscriptionApi;
