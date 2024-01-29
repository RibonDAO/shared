import { AxiosResponse } from "axios";

import { apiPost } from "..";

const ticketsApi = {
  canCollectByIntegration: (
    integrationId: string | number,
    email: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("tickets/can_collect_by_integration", { integrationId, email }),

  collectByIntegration: (
    integrationId: string | number,
    email: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("tickets/collect_by_integration", { integrationId, email }),
};

export default ticketsApi;
