import userIntegrationsApi from ".";
import api from "..";

describe("userIntegrationsApi", () => {
  describe("#getIntegration", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url and headers", () => {
      userIntegrationsApi.getIntegration();
      expect(api.get).toHaveBeenCalledWith("/users/v1/integration");
    });
  });

  describe("#createIntegration", () => {
    const data = {
      name: "Integration 1",
      status: "active",
    };

    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a post request with the correct info: url and params", () => {
      userIntegrationsApi.createIntegration(data);

      expect(api.post).toHaveBeenCalledWith("/users/v1/integration", data);
    });
  });
});
