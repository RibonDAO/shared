import api from "..";
import ribonConfigsApi from ".";

describe("ribonConfigsApi", () => {
  describe("#getRibonConfigs", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      ribonConfigsApi.getRibonConfigs();

      expect(api.get).toHaveBeenCalledWith("/api/v1/ribonConfigs");
    });
  });
});
