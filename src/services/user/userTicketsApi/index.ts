import { AxiosResponse } from "axios";
import { Donation } from "types/entities";
import { apiGet, apiPost } from "..";

const userTicketsApi = {
  getTicketsAvailable: (): Promise<AxiosResponse<any>> =>
    apiGet("tickets/available"),

  postTicketsDonation: (
    nonProfitId: number,
    quantity: number,
    platform?: "app" | "web",
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ): Promise<AxiosResponse<Donation>> =>
    apiPost("tickets/donate", {
      nonProfitId,
      quantity,
      platform,
      utmSource,
      utmMedium,
      utmCampaign,
    }),
};

export default userTicketsApi;
