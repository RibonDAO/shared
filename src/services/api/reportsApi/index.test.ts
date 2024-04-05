import api from "..";
import reportsApi from ".";

describe("reportsApi", () => {
  describe("#getReports", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      reportsApi.getReports();

      expect(api.get).toHaveBeenCalledWith("/api/v1/reports");
    });
  });

  describe("#getReport", () => {
    const reportId = 1;
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      reportsApi.getReport(reportId);

      expect(api.get).toHaveBeenCalledWith("/api/v1/reports/1");
    });
  });
});
