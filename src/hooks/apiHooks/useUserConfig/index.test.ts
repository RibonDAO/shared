import { renderHook } from "@testing-library/react-hooks";
import userConfigApi from "services/api/userConfigApi";
import useUserConfig from ".";

describe("useUserConfig", () => {
  let hook: ReturnType<typeof useUserConfig>;
  const userId = 123;
  const data = { allowedEmailMarketing: true };

  beforeEach(() => {
    const { result } = renderHook(() => useUserConfig());
    hook = result.current;
  });

  describe("#updateUserConfig", () => {
    beforeEach(() => {
      userConfigApi.postUpdateUserConfig = jest.fn(() => ({ data } as any));
    });

    it("calls the userConfigApi searchUser with correct params", () => {
      hook.updateUserConfig(userId, data);

      expect(userConfigApi.postUpdateUserConfig).toHaveBeenCalledWith(userId, data);
    });
  });
});
