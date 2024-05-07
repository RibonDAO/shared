import { AxiosResponse } from "axios";
import { CanDonate } from "types/apiResponses";
import { Donation } from "types/entities";
import { apiGet, apiPost } from "..";

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

  postCanDonate: (
    integrationId: number | string,
    platform: "app" | "web",
    voucherId?: string,
  ): Promise<AxiosResponse<CanDonate>> =>
    apiPost("can_donate", { integrationId, platform, voucherId }),

  getStreak: (): Promise<AxiosResponse<any>> => apiGet("streak"),
};

export default userDonationApi;
