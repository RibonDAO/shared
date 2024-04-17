import api from "..";
import ribonConfigApi from ".";

describe("ribonConfigApi", () => {
  describe("#getRibonConfig", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      ribonConfigApi.getRibonConfig();

      expect(api.get).toHaveBeenCalledWith("/api/v1/configs/settings");
    });
  });
});
