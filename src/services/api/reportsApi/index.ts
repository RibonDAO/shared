import { AxiosResponse } from "axios";
import Report from "types/entities/Report";
import { apiGet } from "..";

const reportsApi = {
  getReports: (): Promise<AxiosResponse<Report[]>> =>
    apiGet(`reports`),

  getReport: (id: number): Promise<AxiosResponse<Report>> =>
    apiGet(`reports/${id}`),
};

export default reportsApi;