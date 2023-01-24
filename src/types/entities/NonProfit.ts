import Cause from "./Cause";
import NonProfitImpact from "./NonProfitImpact";

export default interface NonProfit {
  id: number;
  name: string;
  walletAddress: string;
  impactDescription: string;
  backgroundImage: string;
  coverImage: string;
  mainImage: string;
  logo: string;
  impactByTicket: number;
  createdAt?: string;
  updatedAt?: string;
  nonProfitImpacts?: NonProfitImpact[];
  cause: Cause;
}
