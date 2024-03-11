import { AxiosResponse } from "axios";
import { Donation } from "types/entities";
import { apiGet, apiPost } from "..";

const userTicketsApi = {
  getTicketsAvailable: (): Promise<AxiosResponse<any>> =>
    apiGet("tickets/available"),

  getTicketsToCollect: (): Promise<AxiosResponse<any>> =>
    apiGet("tickets/to_collect"),

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

  collectByClub: (platform: string, category: string): Promise<AxiosResponse<any>> =>
    apiPost("tickets/collect_by_club", { platform, category }),
};

export default userTicketsApi;
