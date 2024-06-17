import { waitForPromises } from "config/testUtils";
import { renderHook } from "config/testUtils/renders";
import warmGlowMessagesApi from "services/api/warmGlowMessagesApi";
import useWarmGlowMessages from ".";

describe("useWarmGlowMessages", () => {
  let hook: ReturnType<typeof useWarmGlowMessages>;
  const data = { id: 1, message: "test message", status: "active" };

  beforeEach(async () => {
    warmGlowMessagesApi.getRandomWarmGlowMessage = jest.fn(() => ({ data } as any));
    const { hook: renderHookResult } = renderHook(() => useWarmGlowMessages());
    await waitForPromises();
    hook = renderHookResult.result.current;
  });

  describe("#getRandomWarmGlowMessage", () => {
    it("returns the warm glow message and status from the api", () => {
      expect(hook.warmGlowMessage?.message).toEqual(data.message);
      expect(hook.warmGlowMessage?.status).toEqual(data.status);
    });
  });
});
