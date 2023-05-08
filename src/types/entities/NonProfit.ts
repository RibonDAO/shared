import Cause from "./Cause";
import NonProfitImpact from "./NonProfitImpact";
import Story from "./Story";

export default interface NonProfit {
  id: number;
  name: string;
  walletAddress: string;
  impactDescription: string;
  backgroundImage: string;
  confirmationImage: string;
  coverImage: string;
  mainImage: string;
  backgroundImageDescription: string;
  confirmationImageDescription: string;
  coverImageDescription: string;
  mainImageDescription: string;
  logo: string;
  impactByTicket: number;
  createdAt?: string;
  updatedAt?: string;
  nonProfitImpacts?: NonProfitImpact[];
  cause: Cause;
  stories?: Story[];
}
