import { userDonationApi, emptyRequest } from "services/index";
import { CanDonate } from "types/apiResponses";
import { useApi } from "hooks/useApi";

function useUserV1Donations() {
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

  function checkCanDonate(
    integrationId: number | string | null,
    platform: "app" | "web",
    voucherId?: string,
  ) {
    const { data, isLoading, refetch } = useApi<CanDonate>({
      key: "canDonate",
      fetchMethod: () => {
        if (integrationId)
          return userDonationApi.postCanDonate(integrationId, platform, voucherId);

        return emptyRequest();
      },
      options: {
        enabled: !!integrationId,
      },
      criteria: [integrationId, voucherId],
    });

    function formattedCanDonate() {
      if (data === undefined) return true;

      return data.canDonate;
    }

    function formattedDonateApp() {
      if (data === undefined) return true;

      return data.donateApp;
    }

    return {
      canDonate: formattedCanDonate(),
      donateApp: formattedDonateApp(),
      isLoading,
      refetch,
    };
  }

  return {
    donate,
    checkCanDonate,
  };
}

export default useUserV1Donations;
