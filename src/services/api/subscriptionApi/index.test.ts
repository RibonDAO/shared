import subscriptionApi from ".";

import api from "..";

describe("subscriptionApi", () => {
  describe("#getUserSubscription", () => {
    beforeEach(() => {
      api.get = jest.fn();
      api.put = jest.fn();
    });
    it("fetches user subscriptions", async () => {
      const userId = 123;
      subscriptionApi.getUserSubscription(userId);

      expect(api.get).toHaveBeenCalledWith(
        `/api/v1/payments/subscriptions_for_customer/${userId}`,
      );
    });
  });

  describe("#cancelSubscription", () => {
    it("cancel a subscription", async () => {
      const subscriptionId = 456;
      await subscriptionApi.cancelSubscription(subscriptionId);

      expect(api.put).toHaveBeenCalledWith(
        `/api/v1/payments/cancel_subscription/${subscriptionId}`,
        {},
      );
    });
  });
});
