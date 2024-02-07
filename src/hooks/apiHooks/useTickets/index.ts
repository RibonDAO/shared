import ticketsApi from "services/api/ticketsApi";

function useTickets() {
  async function canCollectByIntegration(
    integrationId: string | number,
    email: string,
  ) {
    const { data } = await ticketsApi.canCollectByIntegration(integrationId, email);

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
    platform: string,
    email?: string,
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ) {
    const { data } = await ticketsApi.collectAndDonateByIntegration(
      integrationId,
      nonProfitId,
      platform,
      email,
      utmSource,
      utmMedium,
      utmCampaign,
    );

    return data;
  }

  async function canCollectByExternalIds(externalIds: string[]) {
    const { data } = await ticketsApi.canCollectByExternalIds(externalIds);

    return data;
  }

  async function collectByExternalIds(
    externalIds: string[],
    integrationId: string | number,
    email: string,
    platform: string,
  ) {
    const { data } = await ticketsApi.collectByExternalIds(
      externalIds,
      integrationId,
      email,
      platform,
    );

    return data;
  }

  async function collectAndDonateByExternalIds(
    integrationId: string | number,
    nonProfitId: number,
    platform: string,
    externalIds: string[],
    email?: string,
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ) {
    const { data } = await ticketsApi.collectAndDonateByExternalIds(
      integrationId,
      nonProfitId,
      platform,
      externalIds,
      email,
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
    canCollectByExternalIds,
    collectByExternalIds,
    collectAndDonateByExternalIds,
  };
}
export default useTickets;
