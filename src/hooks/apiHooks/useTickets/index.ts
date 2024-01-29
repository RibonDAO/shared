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
  ) {
    const { data } = await ticketsApi.collectByIntegration(integrationId, email);

    return data;
  }

  return {
    canCollectByIntegration,
    collectByIntegration,
  };
}
export default useTickets;
