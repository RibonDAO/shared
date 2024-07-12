import { AxiosResponse } from "axios";
import IsClubMember from "types/apiResponses/IsClubMember";

import { apiGet, apiPut } from "..";

const subscriptionApi = {
  getSubscription: (id: string | number): Promise<AxiosResponse<any>> =>
    apiGet(`users/subscription/${id}`),

  putCancelSubscription: (token: string): Promise<AxiosResponse<any>> =>
    apiPut(`subscriptions/cancel_subscription?token=${token}`, {}),

  getIsClubMember: (): Promise<AxiosResponse<IsClubMember>> =>
    apiGet("users/is_club_member"),
};

export default subscriptionApi;
