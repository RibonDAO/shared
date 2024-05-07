import { renderHook } from "config/testUtils/renders";
import { waitForPromises } from "config/testUtils";
import { userDonationApi } from "services/index";
import useDonationStreak from ".";

describe("useDonationStreak", () => {
  let hook: ReturnType<typeof useDonationStreak>;
  const data = { streak: 1 };

  beforeEach(async () => {
    userDonationApi.getStreak = jest.fn(() => ({ data } as any));
    const { hook: renderHookResult } = renderHook(() => useDonationStreak());
    await waitForPromises();
    hook = renderHookResult.result.current;
  });

  describe("#offers", () => {
    it("returns the offers from the api", () => {
      expect(hook.streak).toEqual(data.streak);
    });
  });
});
