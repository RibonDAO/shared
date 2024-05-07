import { AxiosResponse } from "axios";
import Integration from "types/entities/Integration";
import { apiGet, apiPost } from "..";

const userIntegrationsApi = {
  getIntegration: (data: any): Promise<AxiosResponse<Integration>> =>
    apiGet("integration", data),

  createIntegration: (data: any): Promise<AxiosResponse<Integration>> =>
    apiPost("integration", data),
};

export default userIntegrationsApi;
