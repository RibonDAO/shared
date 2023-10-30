import { AxiosResponse } from "axios";

import { apiGet, apiPut } from "..";

const subscriptionApi = {
  getSubscription: (id: string | number): Promise<AxiosResponse<any>> =>
    apiGet(`users/subscription/${id}`),

  putCancelSubscription: (token: string): Promise<AxiosResponse<any>> =>
    apiPut(`subscriptions/cancel_subscription?token=${token}`, {}),
};

export default subscriptionApi;
