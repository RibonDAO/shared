import Cause from "./Cause";
import NonProfitImpact from "./NonProfitImpact";
import Story from "./Story";
import CreateNonProfitImpacts from "../apiResponses/CreateNonProfitImpacts";
import CreateStory from "../apiResponses/CreateStory";

export default interface NonProfit {
  id: number;
  name: string;
  walletAddress: string;
  impactTitle: string;
  impactDescription: string;
  backgroundImage: string;
  confirmationImage: string;
  coverImage: string;
  coverImageDescription: string;
  mainImage: string;
  backgroundImageDescription: string;
  confirmationImageDescription: string;
  logoDescription: string;
  mainImageDescription: string;
  logo: string;
  impactByTicket: number;
  createdAt?: string;
  updatedAt?: string;
  nonProfitImpacts?: NonProfitImpact[];
  cause: Cause;
  stories?: Story[];
  status: string;
  storiesAttributes?: CreateStory[];
  causeId: number;
  nonProfitImpactsAttributes?: CreateNonProfitImpacts[];
}
