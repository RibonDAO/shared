import userConfigApi from ".";

import api from "..";

describe("userConfigApi", () => {
  beforeEach(() => {
    api.post = jest.fn();
  });

  describe("#getSubscription", () => {
    it("get subscription", async () => {
      const userId = 123;
      const data = { allowedEmailMarketing: true };
      await userConfigApi.postUpdateUserConfig(userId, data);

      expect(api.post).toHaveBeenCalledWith(`/api/v1/users/${userId}/configs`, data);
    });
  });
});
