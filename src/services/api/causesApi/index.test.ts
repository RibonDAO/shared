import causesApi from ".";
import api from "..";

describe("causesApi", () => {
  describe("#getCauses", () => {
    const withPoolBalance = false;
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      causesApi.getCauses(withPoolBalance);

      expect(api.get).toHaveBeenCalledWith("/api/v1/causes", {
        params: { withPoolBalance: false },
      });
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
