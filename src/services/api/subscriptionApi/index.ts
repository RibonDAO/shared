import { AxiosResponse } from "axios";

import { apiPut } from "..";

const subscriptionApi = {
  cancelSubscription: (id: string | number): Promise<AxiosResponse<any>> =>
    apiPut(`payments/cancel_subscription/${id}`, {}),
};

export default subscriptionApi;
