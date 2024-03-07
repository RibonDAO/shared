import { AxiosResponse } from "axios";

import { apiGet } from "..";

const userSubscriptionApi = {
  getIsMember: (): Promise<AxiosResponse<any>> => apiGet("is_member"),
};

export default userSubscriptionApi;
