import { renderHook } from "config/testUtils/renders";
import { waitForPromises } from "config/testUtils";
import tagFactory from "config/testUtils/factories/tagFactory";
import tagsApi from "services/api/tagsApi";
import { useTags } from ".";

describe("useTags", () => {
  let hook: ReturnType<typeof useTags>;
  const data = [tagFactory()];

  beforeEach(async () => {
    tagsApi.getTags = jest.fn(() => ({ data } as any));
    const { hook: renderHookResult } = renderHook(() => useTags());
    await waitForPromises();
    hook = renderHookResult.result.current;
  });

  describe("#tags", () => {
    it("returns the tags from the api", () => {
      expect(hook.tags).toEqual(data);
    });
  });
});
