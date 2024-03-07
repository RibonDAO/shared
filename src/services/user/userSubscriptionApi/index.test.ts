import userSubscriptionApi from ".";

import api from "..";

describe("userSubscriptionApi", () => {
  beforeEach(() => {
    api.get = jest.fn();
  });

  describe("#getIsMember", () => {
    it("get is member", async () => {
      await userSubscriptionApi.getIsMember();

      expect(api.get).toHaveBeenCalled();
    });
  });
});
