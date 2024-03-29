import userTicketsApi from ".";

import api from "..";

describe("userTicketsApi", () => {
  beforeEach(() => {
    api.get = jest.fn();
  });

  describe("#postTicketsDonation", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      userTicketsApi.postTicketsDonation(1, 2, "app");

      expect(api.post).toHaveBeenCalledWith("/users/v1/tickets/donate", {
        nonProfitId: 1,
        quantity: 2,
        platform: "app",
        utmCampaign: undefined,
        utmMedium: undefined,
        utmSource: undefined,
      });
    });
  });
});
