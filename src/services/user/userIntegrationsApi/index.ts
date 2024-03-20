import { AxiosResponse } from "axios";
import Integration from "types/entities/Integration";
import { apiGet, apiPost } from "..";

const userIntegrationsApi = {
  getIntegration: (): Promise<AxiosResponse<Integration>> => apiGet("integration"),

  createIntegration: (data: any): Promise<AxiosResponse<Integration>> =>
    apiPost("integration", data),
};

export default userIntegrationsApi;
