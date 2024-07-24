import { AxiosResponse } from "axios";
import { Donation } from "types/entities";
import { apiPost } from "..";

const userTicketsApi = {
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
  collectByBusiness: (platform: string, category: string): Promise<AxiosResponse<any>> =>
    apiPost("tickets/collect_by_business", { platform, category }),
};

export default userTicketsApi;
