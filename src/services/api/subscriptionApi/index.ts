import { AxiosResponse } from "axios";
import IsMember from "types/apiResponses/IsMember";

import { apiGet, apiPut } from "..";

const subscriptionApi = {
  getSubscription: (id: string | number): Promise<AxiosResponse<any>> =>
    apiGet(`users/subscription/${id}`),

  putCancelSubscription: (token: string): Promise<AxiosResponse<any>> =>
    apiPut(`subscriptions/cancel_subscription?token=${token}`, {}),

  getIsMember: (): Promise<AxiosResponse<IsMember>> => apiGet("users/is_member"),
};

export default subscriptionApi;
