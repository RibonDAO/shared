import { renderHook } from "@testing-library/react-hooks";
import userConfigApi from "services/user/userConfigApi";
import useUserV1Config from ".";

describe("useUserV1Config", () => {
  let hook: ReturnType<typeof useUserV1Config>;
  const data = { allowedEmailMarketing: true };

  beforeEach(() => {
    const { result } = renderHook(() => useUserV1Config());
    hook = result.current;
  });

  describe("#updateUserConfig", () => {
    beforeEach(() => {
      userConfigApi.postUpdateUserConfig = jest.fn(() => ({ data } as any));
    });

    it("calls the userConfigApi searchUser with correct params", () => {
      hook.updateUserConfig(data);

      expect(userConfigApi.postUpdateUserConfig).toHaveBeenCalledWith(data);
    });
  });
});
