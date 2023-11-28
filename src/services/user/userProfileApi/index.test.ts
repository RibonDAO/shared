import userProfileApi from ".";

import api from "..";

describe("userProfileApi", () => {
  beforeEach(() => {
    api.get = jest.fn();
  });

  describe("#getUserProfile", () => {
    it("get profile", async () => {
      await userProfileApi.getUserProfile();

      expect(api.get).toHaveBeenCalled();
    });
  });
});
