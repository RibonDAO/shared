import legacyImpactApi from ".";
import api from "..";

describe("legacyImpactApiApi", () => {
  const userId = 1;

  describe("#getImpact", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      legacyImpactApi.getImpact(userId);

      expect(api.get).toHaveBeenCalledWith("/api/v1/users/1/legacy_impacts");
    });
  });
});
