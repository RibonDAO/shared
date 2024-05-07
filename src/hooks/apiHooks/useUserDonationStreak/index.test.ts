import { renderHook } from "config/testUtils/renders";
import { waitForPromises } from "config/testUtils";
import { userDonationApi } from "services/index";
import useUserDonationStreak from ".";

describe("useUserDonationStreak", () => {
  let hook: ReturnType<typeof useUserDonationStreak>;
  const data = { streak: 1 };

  beforeEach(async () => {
    userDonationApi.getStreak = jest.fn(() => ({ data } as any));
    const { hook: renderHookResult } = renderHook(() => useUserDonationStreak());
    await waitForPromises();
    hook = renderHookResult.result.current;
  });

  describe("#offers", () => {
    it("returns the offers from the api", () => {
      expect(hook.streak).toEqual(data.streak);
    });
  });
});
