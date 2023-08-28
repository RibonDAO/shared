import subscriptionApi from ".";

import api from "..";

describe("subscriptionApi", () => {
  beforeEach(() => {
    api.get = jest.fn();
    api.post = jest.fn();
    api.put = jest.fn();
  });

  describe("#getSubscription", () => {
    it("get subscription", async () => {
      const id = 123;
      await subscriptionApi.getSubscription(id);

      expect(api.get).toHaveBeenCalledWith(
        `/api/v1/users/subscription/${id}`,
      );
    });
  });

  describe("#putCancelSubscription", () => {
    it("cancel subscription", async () => {
      const id = 789;
      await subscriptionApi.putCancelSubscription(id);

      expect(api.put).toHaveBeenCalledWith(
        `/api/v1/subscriptions/cancel_subscription/${id}`,
        {},
      );
    });
  });
});
