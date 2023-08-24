import subscriptionApi from ".";

import api from "..";

describe("subscriptionApi", () => {
  describe("#getUserSubscription", () => {
    beforeEach(() => {
      api.get = jest.fn();
      api.post = jest.fn();
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

  describe("#postSendCancelSubscriptionEmail", () => {
    it("send cancel subscription email", async () => {
      const id = 456;
      await subscriptionApi.postSendCancelSubscriptionEmail(id);

      expect(api.post).toHaveBeenCalledWith(
        "/api/v1/payments/send_cancel_subscription_email", { id }
      );
    });
  });

  describe("#putCancelSubscription", () => {
    it("cancel subscription", async () => {
      const id = 789;
      await subscriptionApi.putCancelSubscription(id);

      expect(api.put).toHaveBeenCalledWith(
        `/api/v1/payments/cancel_subscription/${id}`, {}
      );
    });
  });
});
