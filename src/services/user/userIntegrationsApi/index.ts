import { AxiosResponse } from "axios";
import Integration from "types/entities/Integration";
import { apiGetWithParams, apiPost } from "..";

const userIntegrationsApi = {
  getIntegration: (branch: string): Promise<AxiosResponse<Integration>> =>
    apiGetWithParams("integration", { branch }),

  createIntegration: (data: any): Promise<AxiosResponse<Integration>> =>
    apiPost("integration", data),
};

export default userIntegrationsApi;
