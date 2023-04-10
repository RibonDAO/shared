import causesApi from ".";
import api from "..";

describe("causesApi", () => {
  describe("#getCauses", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      causesApi.getCauses();

      expect(api.get).toHaveBeenCalledWith("/api/v1/causes/");
    });
  });

  describe("#getFreeDonationCauses", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      causesApi.getFreeDonationCauses();

      expect(api.get).toHaveBeenCalledWith("/api/v1/free_donation_causes/");
    });
  });

  describe("#getCause", () => {
    const causeId = 1;
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      causesApi.getCause(causeId);

      expect(api.get).toHaveBeenCalledWith("/api/v1/causes/1");
    });
  });
});
