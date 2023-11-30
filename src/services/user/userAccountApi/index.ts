import { AxiosResponse } from "axios";
import { apiPost } from "..";

const userAccountApi = {
  postSendValidatedEmail: (): Promise<AxiosResponse<any>> =>
    apiPost("account/send_validated_email", {}),
  postValidateExtraTicket: (email?: string): Promise<AxiosResponse<any>> =>
    apiPost("account/send_validated_email", { email }),
};

export default userAccountApi;
