import subscriptionApi from ".";

import api from "..";

describe("subscriptionApi", () => {
  describe("#getUserSubscription", () => {
    beforeEach(() => {
      api.get = jest.fn();
      api.post = jest.fn();
    });
    it("fetches user subscriptions", async () => {
      const userId = 123;
      subscriptionApi.getUserSubscription(userId);

      expect(api.get).toHaveBeenCalledWith(
        `/api/v1/payments/subscriptions_for_customer/${userId}`,
      );
    });
  });

  describe("#sendCancelSubscriptionEmail", () => {
    it("send cancel subscription email", async () => {
      const id = 456;
      await subscriptionApi.sendCancelSubscriptionEmail(id);

      expect(api.post).toHaveBeenCalledWith(
        "/api/v1/payments/send_cancel_subscription_email", { id }
      );
    });
  });
});
