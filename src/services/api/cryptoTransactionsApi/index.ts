import { AxiosResponse } from "axios";
import { TransactionStatus } from "types/enums/TransactionStatus";
import { apiPost, apiPut } from "..";

const cryptoTransactionApi = {
  postTransaction: (
    transactionHash: string,
    amount: string,
    walletAddress: string,
    integrationId: string | number,
    causeId: string | number,
    platform: string,
    nonProfitId?: string | number,
    utmCampaign?: string,
    utmMedium?: string,
    utmSource?: string,
  ): Promise<AxiosResponse<any>> =>
    apiPost("payments/cryptocurrency", {
      transactionHash,
      amount,
      walletAddress,
      integrationId,
      causeId,
      platform,
      nonProfitId,
      utmCampaign,
      utmMedium,
      utmSource,
    }),

  putTransactionStatus: (
    transactionHash: string,
    status: TransactionStatus,
  ): Promise<AxiosResponse<any>> =>
    apiPut("payments/cryptocurrency", { transactionHash, status }),
};

export default cryptoTransactionApi;
