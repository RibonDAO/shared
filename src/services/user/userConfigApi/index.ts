import { AxiosResponse } from "axios";
import { apiDelete } from "services/api";
import UserConfig from "types/entities/UserConfig";
import { apiPost } from "..";

const userConfigApi = {
  postUpdateUserConfig: (data: UserConfig): Promise<AxiosResponse<any>> =>
    apiPost("configs", data),
  postSendDeleteAccountEmail: (): Promise<AxiosResponse<any>> =>
    apiPost("send_delete_account_email", {}),
  deleteUser: (token: string): Promise<AxiosResponse<{}>> =>
    apiDelete(`users?token=${token}`, {}),
};

export default userConfigApi;
