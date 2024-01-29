import userTicketsApi from ".";

import api from "..";

describe("userTicketsApi", () => {
  beforeEach(() => {
    api.get = jest.fn();
  });

  describe("#getTicketsAvailable", () => {
    it("get user Tickets", async () => {
      await userTicketsApi.getTicketsAvailable();

      expect(api.get).toHaveBeenCalled();
    });
  });
});
