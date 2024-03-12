import { AxiosResponse } from "axios";
import { Donation } from "types/entities";
import { apiGetWithParams, apiPost } from "..";

const userTicketsApi = {
  getTicketsToCollect: (source: string): Promise<AxiosResponse<any>> =>
    apiGetWithParams("tickets/to_collect", { source }),

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
