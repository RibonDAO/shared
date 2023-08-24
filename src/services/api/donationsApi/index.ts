import { AxiosResponse } from "axios";
import Donation from "types/entities/Donation";
import { apiPost } from "..";

const donationsApi = {
  postDonation: (
    integrationId: number | string,
    nonProfitId: number,
    email: string,
    platform?: "app" | "web",
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string
  ): Promise<AxiosResponse<Donation>> =>
    apiPost("donations", { integrationId, nonProfitId, email, platform, utmSource, utmMedium, utmCampaign }),

  postVoucherDonation: (
    integrationId: number | string,
    nonProfitId: number,
    email: string,
    externalId: string,
    platform?: "app" | "web",
    utmCampaign?: string,
    utmMedium?: string,
    utmSource?: string
  ): Promise<AxiosResponse<Donation>> =>
    apiPost("vouchers/donations", {
      integrationId,
      nonProfitId,
      email,
      externalId,
      platform,
      utmCampaign,
      utmMedium,
      utmSource
    }),
};

export default donationsApi;
