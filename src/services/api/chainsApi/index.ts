import { AxiosResponse } from "axios";
import Chain from "types/entities/Chain";
import { apiGet } from "..";

const chainsApi = {
  getChains: (): Promise<AxiosResponse<Chain[]>> => apiGet("chains"),
};

export default chainsApi;
