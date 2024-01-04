import userAccountApi from ".";

import api from "..";

describe("userAccountApi", () => {
  beforeEach(() => {
    api.post = jest.fn();
  });

  describe("#getSubscription", () => {
    it("get subscription", async () => {
      await userAccountApi.postSendValidatedEmail();

      expect(api.post).toHaveBeenCalledWith(
        "/users/v1/account/send_validated_email",
        {},
      );
    });
  });
});
