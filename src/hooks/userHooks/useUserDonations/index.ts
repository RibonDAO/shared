import { userDonationApi } from "services/index";

function useUserDonations() {
  async function donate(
    integrationId: number | string,
    nonProfitId: number,
    platform?: "app" | "web",
    externalId?: string,
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ) {
    if (externalId) {
      await userDonationApi.postVoucherDonation(
        integrationId,
        nonProfitId,
        externalId,
        platform,
        utmSource,
        utmMedium,
        utmCampaign,
      );

      return;
    }

    await userDonationApi.postDonation(
      integrationId,
      nonProfitId,
      platform,
      utmSource,
      utmMedium,
      utmCampaign,
    );
  }

  return {
    donate,
  };
}

export default useUserDonations;
