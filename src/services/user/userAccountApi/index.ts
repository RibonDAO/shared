import { AxiosResponse } from "axios";
import { apiPost } from "..";

const userAccountApi = {
  postSendValidatedEmail: (): Promise<AxiosResponse<any>> =>
    apiPost("account/send_validated_email", {}),
  postValidateExtraTicket: (token?: string): Promise<AxiosResponse<any>> =>
    apiPost("account/validate_extra_ticket", { token }),
};

export default userAccountApi;
