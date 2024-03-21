import { renderHook } from "config/testUtils/renders";
import reportFactory from "config/testUtils/factories/reportFactory";
import { waitForPromises } from "config/testUtils";
import reportsApi from "services/api/reportsApi";
import useReports from ".";

describe("useReports", () => {
  let hook: ReturnType<typeof useReports>;
  const data = [reportFactory()];

  beforeEach(async () => {
    reportsApi.getReports = jest.fn(() => ({ data } as any));
    const { hook: renderHookResult } = renderHook(() => useReports());
    await waitForPromises();
    hook = renderHookResult.result.current;
  });

  describe("#reports", () => {
    it("returns the reports from the api", () => {
      expect(hook.reports).toEqual(data);
    });
  });
});