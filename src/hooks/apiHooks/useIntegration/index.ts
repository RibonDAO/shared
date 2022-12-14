import { useApi } from "hooks/useApi";
import integrationsApi from "services/api/integrationsApi";
import Integration from "types/entities/Integration";
import { setLocalStorageItem } from "lib/localStorage";

function useIntegration(integrationId: number | string | null | undefined) {
  if (!integrationId) {
    setLocalStorageItem("integrationName", "undefined");
    return {
      integration: {} as Integration,
      isLoading: true,
      refetch: () => {},
    };
  }

  const {
    data: integration,
    isLoading,
    refetch,
    error,
  } = useApi<Integration>({
    key: "integration",
    fetchMethod: () => integrationsApi.getIntegration(integrationId),
    options: {
      enabled: !!integrationId,
    },
  });

  if (error) {
    setLocalStorageItem("integrationName", "error");
  }

  if (integration) {
    setLocalStorageItem("integrationName", integration.name);
  }

  return { integration, isLoading, refetch, error };
}

export default useIntegration;
