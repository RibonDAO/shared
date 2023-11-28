import { AxiosResponse } from "axios";

import { apiGet } from "..";

const userProfileApi = {
  getUserProfile: (): Promise<AxiosResponse<any>> => apiGet("profile"),
};

export default userProfileApi;
