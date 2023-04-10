import { AxiosResponse } from "axios";
import NonProfit from "types/entities/NonProfit";
import { apiGet } from "..";

const nonProfitsApi = {
  getNonProfits: (): Promise<AxiosResponse<NonProfit[]>> => apiGet("non_profits"),
  getFreeDonationNonProfits: (): Promise<AxiosResponse<NonProfit[]>> =>
    apiGet("free_donation_non_profits"),
};

export default nonProfitsApi;
