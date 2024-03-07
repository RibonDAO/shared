import { useApi } from "hooks/useApi";
import ticketsApi from "services/api/ticketsApi";
import { UserTickets } from "types/entities/UserTickets";

function useTickets() {
  function ticketsAvailable() {
    const { refetch, isLoading, data } = useApi<UserTickets>({
      key: "UserTickets",
      fetchMethod: () => ticketsApi.getTicketsAvailable(),
    });

    return { tickets: data?.tickets, refetch, isLoading };
  }

  async function canCollectByIntegration(
    integrationId: string | number,
    email: string,
  ) {
    const { data } = await ticketsApi.canCollectByIntegration(integrationId, email);

    return data;
  }

  async function collectByIntegration(
    integrationId: string | number,
    platform: string,
    email: string,
  ) {
    const { data } = await ticketsApi.collectByIntegration(
      integrationId,
      platform,
      email,
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
    platform: string,
    email?: string,
  ) {
    const { data } = await ticketsApi.collectByExternalIds(
      externalIds,
      integrationId,
      platform,
      email,
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

  async function collectByClub(platform: string, category: string) {
    const { data } = await ticketsApi.collectByClub(platform, category);

    return data;
  }

  return {
    ticketsAvailable,
    canCollectByIntegration,
    collectByIntegration,
    collectAndDonateByIntegration,
    canCollectByExternalIds,
    collectByExternalIds,
    collectAndDonateByExternalIds,
    collectByClub,
  };
}
export default useTickets;
