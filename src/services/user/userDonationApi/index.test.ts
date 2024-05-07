import userDonationApi from ".";
import api from "..";

describe("userDonationApi", () => {
  describe("#postDonation", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      userDonationApi.postDonation(1, 1, "app");

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
      userDonationApi.postVoucherDonation(1, 1, "12329", "app");

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

  describe("#postCanDonate", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a post request with the correct info: url, params and headers", () => {
      userDonationApi.postCanDonate(1, "app");

      expect(api.post).toHaveBeenCalledWith("/users/v1/can_donate", {
        integrationId: 1,
        platform: "app",
      });
    });
  });

  describe("#getStreak", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      userDonationApi.getStreak();

      expect(api.get).toHaveBeenCalledWith("/users/v1/streak");
    });
  });
});
