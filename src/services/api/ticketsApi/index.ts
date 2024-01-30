import { AxiosResponse } from "axios";

import { apiPost } from "..";

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
};

export default ticketsApi;
