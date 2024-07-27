import donationsApi from "services/api/donationsApi";
import impactApi from "services/api/impactApi";
import { useApi } from "hooks/useApi";
import {
  DonationsCount,
  AppDonationsCount,
} from "types/apiResponses/DonationsCount";
import { TotalDonationsToday } from "types/apiResponses/TotalDonationsToday";

function useDonations(userId: number | undefined) {
  const { data: donationsCountResponse } = useApi<DonationsCount>({
    key: "donationsCount",
    fetchMethod: () => {
      const id = userId || null;
      return impactApi.getDonationsCount(id);
    },
    options: {
      enabled: !!userId,
    },
    criteria: [userId],
  });

  const { data: appDonationsCountResponse } = useApi<AppDonationsCount>({
    key: "appDonationsCount",
    fetchMethod: () => {
      const id = userId || null;
      return impactApi.getAppDonationsCount(id);
    },
    options: {
      enabled: !!userId,
    },
    criteria: [userId],
  });


  const { data: totalDonationsTodayResponse } = useApi<TotalDonationsToday>({
    key: "totalDonationsToday",
    fetchMethod: () => {
      return donationsApi.getTodaysDonationsCount()
    }
  })

  async function donate(
    integrationId: number | string,
    nonProfitId: number,
    email: string,
    platform?: "app" | "web",
    externalId?: string,
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ) {
    if (externalId) {
      await donationsApi.postVoucherDonation(
        integrationId,
        nonProfitId,
        email,
        externalId,
        platform,
        utmSource,
        utmMedium,
        utmCampaign,
      );

      return;
    }

    await donationsApi.postDonation(
      integrationId,
      nonProfitId,
      email,
      platform,
      utmSource,
      utmMedium,
      utmCampaign,
    );
  }

  return {
    donate,
    donationsCount: donationsCountResponse?.donationsCount,
    appDonationsCount: appDonationsCountResponse?.appDonationsCount,
    totalDonationsToday: totalDonationsTodayResponse?.todayDonations
  };
}

export default useDonations;
