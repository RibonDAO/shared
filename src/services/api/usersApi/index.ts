import { AxiosResponse } from "axios";
import User from "types/entities/User";
import CanDonate from "types/apiResponses/CanDonate";
import CompletedTask from "types/apiResponses/CompletedTask";
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
        walletAddress ? `wallet_address=${walletAddress}` : ""
      }`,
    ),

  postCanDonate: (
    integrationId: number | string,
  ): Promise<AxiosResponse<CanDonate>> =>
    apiPost("users/can_donate", { integrationId }),

  getCompletedTasks: (): Promise<AxiosResponse<CompletedTask[]>> =>
    apiGet(`users/completed_tasks`),

  postCompleteTask: (
    taskIdentifier: number | string,
  ): Promise<AxiosResponse<CompletedTask>> =>
    apiPost("users/complete_task", { taskIdentifier }),
};

export default usersApi;
