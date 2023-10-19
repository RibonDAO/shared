import { AxiosResponse } from "axios";
import { apiPost } from "..";

const userAuthenticationApi = {
  postRefreshToken: (refreshToken: string): Promise<AxiosResponse<any>> =>
    apiPost("auth/refresh_token", { refreshToken }),
};

export default userAuthenticationApi;
