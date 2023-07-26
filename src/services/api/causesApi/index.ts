import { AxiosResponse } from "axios";
import Cause from "types/entities/Cause";
import { apiGet } from "..";

const causesApi = {
  getCauses: (withPoolBalance: boolean): Promise<AxiosResponse<Cause[]>> =>
    apiGet("causes", { params: { withPoolBalance } }),
  getCause: (id: number): Promise<AxiosResponse<Cause>> => apiGet(`causes/${id}`),
};

export default causesApi;
