import userTicketsApi from "services/user/userTicketsApi";

function useUserTickets() {
  async function donate(
    nonProfitId: number,
    quantity: number,
    platform?: "app" | "web",
    utmSource?: string,
    utmMedium?: string,
    utmCampaign?: string,
  ) {
    return userTicketsApi.postTicketsDonation(
      nonProfitId,
      quantity,
      platform,
      utmSource,
      utmMedium,
      utmCampaign,
    );
  }

  async function collectByClub(platform: string, category: string) {
    const { data } = await userTicketsApi.collectByClub(platform, category);

    return data;
  }

  async function collectByBusiness(platform: string, category: string) {
    const { data } = await userTicketsApi.collectByBusiness(platform, category);

    return data;
  }

  return {
    donate,
    collectByClub,
    collectByBusiness
  };
}

export default useUserTickets;
