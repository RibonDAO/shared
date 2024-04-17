import { AxiosResponse } from "axios";
import RibonConfig from "types/entities/RibonConfig";
import { apiGet } from "..";

const ribonConfigsApi = {
  getRibonConfigs: (): Promise<AxiosResponse<RibonConfig>> => apiGet("ribonConfig"),
};

export default ribonConfigsApi;
