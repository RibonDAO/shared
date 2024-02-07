import { AxiosResponse } from "axios";

import { apiPost } from "..";

const ticketsApi = {
  canCollectByIntegration: (
    integrationId: string | number,
    email: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("tickets/can_collect_by_integration", {
      integrationId,
      email,
    }),

  collectByIntegration: (
    integrationId: string | number,
    platform: string,
    email?: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("tickets/collect_by_integration", { integrationId, platform, email }),

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

  canCollectByExternalIds: (externalIds: string[]): Promise<AxiosResponse<any>> =>
    apiPost("tickets/can_collect_by_external_ids", {
      externalIds,
    }),

  collectByExternalIds: (
    externalIds: string[],
    integrationId: string | number,
    platform: string,
    email?: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("tickets/collect_by_external_ids", {
      externalIds,
      integrationId,
      platform,
      email,
    }),

  collectAndDonateByExternalIds: (
    integrationId: string | number,
    nonProfitId: number,
    platform: string,
    externalIds: string[],
    email?: string,
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("tickets/collect_and_donate_by_external_ids", {
      integrationId,
      nonProfitId,
      platform,
      externalIds,
      email,
      utmSource,
      utmMedium,
      utmCampaign,
    }),
};

export default ticketsApi;
