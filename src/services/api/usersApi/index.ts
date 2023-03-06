import { AxiosResponse } from "axios";
import User from "types/entities/User";
import CanDonate from "types/apiResponses/CanDonate";
import { apiPost, apiGet } from "..";

const usersApi = {
  postCreateUser: (email: string, language: string): Promise<AxiosResponse<User>> =>
    apiPost("users", { email, language }),

  postSearchUser: (email: string): Promise<AxiosResponse<User>> =>
    apiPost("users/search", { email }),

  getUserStatistics: (
    id?: number,
    walletAddress?: string,
  ): Promise<AxiosResponse<User>> =>
    apiGet(
      `users/statistics/?${id ? `id=${id}&` : ""}${
        walletAddress ? `walletAddress=${walletAddress}` : ""
      }`,
    ),

  postCanDonate: (
    integrationId: number | string,
  ): Promise<AxiosResponse<CanDonate>> =>
    apiPost("users/can_donate", { integrationId }),
};

export default usersApi;
