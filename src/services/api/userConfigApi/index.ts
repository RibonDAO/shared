import { AxiosResponse } from "axios";
import UserConfig from "types/entities/UserConfig";
import { apiPost } from "..";

const userConfigApi = {
  postUpdateUserConfig: (
    userId: number,
    data: UserConfig,
  ): Promise<AxiosResponse<any>> => apiPost(`users/${userId}/configs`, data),
};

export default userConfigApi;
