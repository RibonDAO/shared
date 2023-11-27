import { AxiosResponse } from "axios";
import UserConfig from "types/entities/UserConfig";
import { apiGet, apiPost } from "..";

const userConfigApi = {
  postUpdateUserConfig: (
    userId: number,
    data: UserConfig,
  ): Promise<AxiosResponse<any>> => apiPost(`users/${userId}/configs`, data),

  getUserConfig: (): Promise<AxiosResponse<any>> => apiGet("users/configs"),
};

export default userConfigApi;
