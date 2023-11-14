import userConfigApi from ".";

import api from "..";

describe("userConfigApi", () => {
  beforeEach(() => {
    api.post = jest.fn();
  });

  describe("#getSubscription", () => {
    it("get subscription", async () => {
      const data = { allowedEmailMarketing: true };
      await userConfigApi.postUpdateUserConfig(data);

      expect(api.post).toHaveBeenCalledWith("/users/v1/configs", data);
    });
  });
});
