import { useApi } from "../../useApi";
import reportsApi from "services/api/reportsApi";
import Report from "types/entities/Report";

function useReports() {
  const {
    data: reports,
    isLoading,
    refetch,
  } = useApi<Report[]>({
    key: "reports",
    fetchMethod: () => reportsApi.getReports(),
    options: {
      enabled: true,
    },
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