import { AxiosResponse } from "axios";

import { apiGet, apiPut } from "..";

const subscriptionApi = {
  getSubscription: (id: string | number): Promise<AxiosResponse<any>> =>
    apiGet(`users/subscription/${id}`),

  putCancelSubscription: (id: string | number): Promise<AxiosResponse<any>> =>
    apiPut(`subscriptions/cancel_subscription/${id}`, {}),
};

export default subscriptionApi;
