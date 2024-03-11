import { AxiosResponse } from "axios";
import { apiGet } from "..";
import IsMember from "types/apiResponses/IsMember";

const userSubscriptionApi = {
  getIsMember: (): Promise<AxiosResponse<IsMember>> => apiGet("is_member"),
};

export default userSubscriptionApi;
