import tagsApi from ".";
import api from "..";

describe("tagsApi", () => {
  describe("#getTags", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      tagsApi.getTags();

      expect(api.get).toHaveBeenCalledWith("/api/v1/tags");
    });
  });
});
