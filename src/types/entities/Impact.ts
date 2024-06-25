import NonProfit from "./NonProfit";

export default interface Impact {
  id: number;
  impact: string;
  donationCount: string;
  walletAddress: string;
  totalDonated: number;
  nonProfit: NonProfit;
}
