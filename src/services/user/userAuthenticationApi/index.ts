import { AxiosResponse } from "axios";
import { apiPost } from "..";

const userAuthenticationApi = {
  postAuthenticate: (token: string, provider: string): Promise<AxiosResponse<any>> =>
    apiPost("auth/authenticate", { token, provider }),
  postRefreshToken: (refreshToken: string): Promise<AxiosResponse<any>> =>
    apiPost("auth/refresh_token", { refreshToken }),
  postAuthorizeFromAuthToken: (
    authToken: string,
    id: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("auth/authorize_from_auth_token", { authToken, id }),
  postSendAuthenticationEmail: (
    email?: string,
    accountId?: string,
    integrationId?: string | number,
  ): Promise<AxiosResponse<any>> =>
    apiPost("auth/send_authentication_email", { email, accountId, integrationId }),
  postSendOtpEmail: (
    email?: string,
    accountId?: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("auth/send_otp_email", { email, accountId }),
  postAuthorizeFromOtpCode: (
    otpCode: string,
    id: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("auth/authorize_from_otp_code", { otpCode, id }),
};

export default userAuthenticationApi;
