import { AxiosResponse } from "axios";
import UserConfig from "types/entities/UserConfig";
import { apiGet, apiPost } from "..";

const userConfigApi = {
  postUpdateUserConfig: (data: UserConfig): Promise<AxiosResponse<any>> =>
    apiPost("configs", data),
  getUserConfig: (): Promise<AxiosResponse<any>> => apiGet("configs"),
};

export default userConfigApi;
