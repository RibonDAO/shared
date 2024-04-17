import { AxiosResponse } from "axios";
import RibonConfig from "types/entities/RibonConfig";
import { apiGet } from "..";

const ribonConfigApi = {
  getRibonConfig: (): Promise<AxiosResponse<RibonConfig>> =>
    apiGet("configs/settings"),
};

export default ribonConfigApi;
