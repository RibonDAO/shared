import { AxiosResponse } from "axios";

import { apiGet } from "..";

const userTicketsApi = {
  getTicketsAvailable: (): Promise<AxiosResponse<any>> =>
    apiGet("tickets/available"),
};

export default userTicketsApi;
