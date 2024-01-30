import { AxiosResponse } from "axios";
import { Donation } from "types/entities";
import { apiGet, apiPost } from "..";

const userTicketsApi = {
  getTicketsAvailable: (): Promise<AxiosResponse<any>> =>
    apiGet("tickets/available"),

  postTicketsDonation: (
    integrationId: number | string,
    nonProfitId: number,
    quantity: number,
    platform?: "app" | "web",
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ): Promise<AxiosResponse<Donation>> =>
    apiPost("tickets/donate", {
      integrationId,
      nonProfitId,
      quantity,
      platform,
      utmSource,
      utmMedium,
      utmCampaign,
    }),
};

export default userTicketsApi;
