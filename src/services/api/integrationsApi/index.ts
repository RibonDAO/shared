import { AxiosResponse } from "axios";
import Integration from "types/entities/Integration";
import IntegrationImpact from "types/apiResponses/IntegrationImpact";
import { apiGet, apiPost, apiPut } from "..";

const integrationsApi = {
  getIntegration: (id: number | string): Promise<AxiosResponse<Integration>> =>
    apiGet(`integrations/${id}`),

  createIntegration: (data: any): Promise<AxiosResponse<Integration>> =>
    apiPost("integrations", data),

  getIntegrationImpact: (
    id: number | string,
    startDate: string,
    endDate: string,
  ): Promise<AxiosResponse<IntegrationImpact>> =>
    apiGet(`integrations/${id}/impacts`, {
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    }),
  updateIntegration: (
    id: any,
    data: Integration,
  ): Promise<AxiosResponse<Integration>> => apiPut(`integrations/${id}`, data),
};

export default integrationsApi;
