import Report from "types/entities/Report";
import reportsApi from "services/api/reportsApi";
import { useApi } from "../../useApi";

function useReports() {
  const {
    data: reports,
    isLoading,
    refetch,
  } = useApi<Report[]>({
    key: "reports",
    fetchMethod: () => reportsApi.getReports(),
  });

  async function getReport(reportId: number) {
    const { data: report } = await reportsApi.getReport(reportId);

    return report;
  }

  return {
    reports: reports || [],
    getReport,
    isLoading,
    refetch,
  };
}

export default useReports;
