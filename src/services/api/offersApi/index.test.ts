import { Categories } from "types/enums/Categories";
import { Currencies } from "types/enums/Currencies";
import offersApi from ".";
import api from "..";

describe("offersApi", () => {
  describe("#getOffers", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      offersApi.getOffers(Currencies.BRL, false, Categories.DIRECT_CONTRIBUTION);

      expect(api.get).toHaveBeenCalledWith(
        "/api/v1/givings/offers?currency=brl&subscription=false&category=direct_contribution",
      );
    });
  });

  describe("#getOffer", () => {
    const offerId = 1;
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      offersApi.getOffer(offerId);

      expect(api.get).toHaveBeenCalledWith("/api/v1/givings/offers/1");
    });
  });
});
