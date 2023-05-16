import chainsApi from ".";
import api from "..";

describe("chainsApi", () => {
  describe("#getChains", () => {
    beforeEach(() => {
      // If it's a different method just change it to: post, put, delete, etc.
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      chainsApi.getChains();

      expect(api.get).toHaveBeenCalledWith("/api/v1/chains");
    });
  });
});
