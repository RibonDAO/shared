import { AxiosResponse } from "axios";

import { apiGet, apiPost } from "..";

const ticketsApi = {
  canCollectByIntegration: (
    integrationId: string | number,
    email: string,
    platform: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("tickets/can_collect_by_integration", {
      integrationId,
      email,
      platform,
    }),

  collectByIntegration: (
    integrationId: string | number,
    email: string,
    platform: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("tickets/collect_by_integration", { integrationId, email, platform }),

  collectAndDonateByIntegration: (
    integrationId: string | number,
    nonProfitId: number,
    platform: string,
    email?: string,
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("tickets/collect_and_donate_by_integration", {
      integrationId,
      nonProfitId,
      platform,
      email,
      utmSource,
      utmMedium,
      utmCampaign,
    }),

  getTicketsAvailable: (): Promise<AxiosResponse<any>> =>
    apiGet("tickets/available"),
};

export default ticketsApi;
