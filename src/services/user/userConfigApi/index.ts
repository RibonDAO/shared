import { AxiosResponse } from "axios";
import UserConfig from "types/entities/UserConfig";
import { apiPost } from "..";

const userConfigApi = {
  postUpdateUserConfig: (data: UserConfig): Promise<AxiosResponse<any>> =>
    apiPost("configs", data),
};

export default userConfigApi;
