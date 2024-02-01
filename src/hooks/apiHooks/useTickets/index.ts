import ticketsApi from "services/api/ticketsApi";

function useTickets() {
  async function canCollectByIntegration(
    integrationId: string | number,
    email: string,
    platform: string,
  ) {
    const { data } = await ticketsApi.canCollectByIntegration(
      integrationId,
      email,
      platform,
    );

    return data;
  }

  async function collectByIntegration(
    integrationId: string | number,
    email: string,
    platform: string,
  ) {
    const { data } = await ticketsApi.collectByIntegration(
      integrationId,
      email,
      platform,
    );

    return data;
  }

  async function collectAndDonateByIntegration(
    integrationId: string | number,
    nonProfitId: number,
    email: string,
    platform: string,
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ) {
    const { data } = await ticketsApi.collectAndDonateByIntegration(
      integrationId,
      nonProfitId,
      email,
      platform,
      utmSource,
      utmMedium,
      utmCampaign,
    );

    return data;
  }

  return {
    canCollectByIntegration,
    collectByIntegration,
    collectAndDonateByIntegration,
  };
}
export default useTickets;
