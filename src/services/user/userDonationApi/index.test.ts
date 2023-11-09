import usersApi from ".";
import api from "..";

describe("usersApi", () => {
  describe("#postDonation", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postDonation(1, 1, "app");

      expect(api.post).toHaveBeenCalledWith("/users/v1/donations", {
        integrationId: 1,
        nonProfitId: 1,
        platform: "app",
        utmCampaign: undefined,
        utmMedium: undefined,
        utmSource: undefined,
      });
    });
  });

  describe("#postVoucherDonation", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postVoucherDonation(1, 1, "12329", "app");

      expect(api.post).toHaveBeenCalledWith("/users/v1/vouchers/donations", {
        integrationId: 1,
        nonProfitId: 1,
        externalId: "12329",
        platform: "app",
        utmCampaign: undefined,
        utmMedium: undefined,
        utmSource: undefined,
      });
    });
  });
});
