import integrationsApi from "services/api/integrationsApi";

function useApiIntegrations() {
  async function getApiIntegration(id: any) {
    const { data: integration } = await integrationsApi.getIntegration(id);

    return integration;
  }

  return {
    getApiIntegration,
  };
}

export default useApiIntegrations;
