import warmGlowMessagesApi from ".";
import api from "..";

describe("warmGlowMessagesApi", () => {
  describe("#getRandomWarmGlowMessage", () => {

    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      warmGlowMessagesApi.getRandomWarmGlowMessage();

      expect(api.get).toHaveBeenCalledWith("/api/v1/warmglow_messages/random_message");
    });
  });
});
