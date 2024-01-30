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

  return {
    canCollectByIntegration,
    collectByIntegration,
  };
}
export default useTickets;
