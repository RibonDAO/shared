import donationsApi from "services/api/donationsApi";
import impactApi from "services/api/impactApi";
import { useApi } from "hooks/useApi";
import DonationsCount from "types/apiResponses/DonationsCount";

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

  async function donate(
    integrationId: number | string,
    nonProfitId: number,
    email: string,
    platform?: "app" | "web",
    externalId?: string,
  ) {
    if (externalId) {
      await donationsApi.postVoucherDonation(
        integrationId,
        nonProfitId,
        email,
        externalId,
        platform,
      );

      return;
    }

    await donationsApi.postDonation(integrationId, nonProfitId, email, platform);
  }

  return {
    donate,
    donationsCount: donationsCountResponse?.donationsCount,
  };
}

export default useDonations;
