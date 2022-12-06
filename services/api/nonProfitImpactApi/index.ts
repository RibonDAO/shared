import { AxiosResponse } from "axios";
import NonProfit from "types/entities/NonProfit";
import { Currencies } from "types/enums/Currencies";
import { apiPost } from "..";

const nonProfitImpactApi = {
  postImpactByNonProfit: (
    nonProfitId?: number,
    value?: number,
    currency?: Currencies,
  ): Promise<AxiosResponse<NonProfit[]>> =>
    apiPost("givings/impact_by_non_profit", {
      nonProfitId,
      value,
      currency,
    }),
};

export default nonProfitImpactApi;
