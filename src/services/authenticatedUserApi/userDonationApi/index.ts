import { AxiosResponse } from "axios";
import { Donation } from "types/entities";
import { apiPost } from "..";

const userDonationApi = {
  postDonation: (
    integrationId: number | string,
    nonProfitId: number,
    platform?: "app" | "web",
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ): Promise<AxiosResponse<Donation>> =>
    apiPost("donations", {
      integrationId,
      nonProfitId,
      platform,
      utmSource,
      utmMedium,
      utmCampaign,
    }),

  postVoucherDonation: (
    integrationId: number | string,
    nonProfitId: number,
    externalId: string,
    platform?: "app" | "web",
    utmCampaign?: string,
    utmMedium?: string,
    utmSource?: string,
  ): Promise<AxiosResponse<Donation>> =>
    apiPost("vouchers/donations", {
      integrationId,
      nonProfitId,
      externalId,
      platform,
      utmCampaign,
      utmMedium,
      utmSource,
    }),
};

export default userDonationApi;
