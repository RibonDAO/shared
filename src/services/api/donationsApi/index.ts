import { AxiosResponse } from "axios";
import Donation from "types/entities/Donation";
import { apiPost } from "..";

const donationsApi = {
  postDonation: (
    integrationId: number,
    nonProfitId: number,
    email: string,
    platform?: string,
  ): Promise<AxiosResponse<Donation>> =>
    apiPost("donations", { integrationId, nonProfitId, email, platform }),

  postVoucherDonation: (
    integrationId: number,
    nonProfitId: number,
    email: string,
    externalId: string,
    platform?: string,
  ): Promise<AxiosResponse<Donation>> =>
    apiPost("vouchers/donations", {
      integrationId,
      nonProfitId,
      email,
      externalId,
      platform,
    }),
};

export default donationsApi;
