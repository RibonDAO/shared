import { useApi } from "hooks/useApi";
import usersApi from "services/api/usersApi";
import CanDonate from "types/apiResponses/CanDonate";
import { emptyRequest } from "services/api";

function useCanDonate(
  integrationId: number | string | null,
  platform: string,
  voucherId?: string,
) {
  const {
    data: canDonate,
    isLoading,
    refetch,
  } = useApi<CanDonate>({
    key: "canDonate",
    fetchMethod: () => {
      if (integrationId)
        return usersApi.postCanDonate(integrationId, platform, voucherId);

      return emptyRequest();
    },
    options: {
      enabled: !!integrationId,
    },
    criteria: [integrationId, voucherId],
  });

  function formattedCanDonate() {
    if (canDonate === undefined) return true;

    return canDonate.canDonate;
  }

  function formattedDonateApp() {
    if (canDonate === undefined) return true;

    return canDonate.donateApp;
  }

  return {
    canDonate: formattedCanDonate(),
    donateApp: formattedDonateApp(),
    isLoading,
    refetch,
  };
}

export default useCanDonate;
