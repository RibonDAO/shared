import CreateCause from "./CreateCause";
import CreateNonProfitImpacts from "./CreateNonProfitImpacts";
import CreateStory from "./CreateStory";

export default interface CreateNonProfit {
  id?: string;
  name: string;
  walletAddress: string;
  status: string;
  logo?: any;
  backgroundImage?: any;
  mainImage?: any;
  causeId: number;
  storiesAttributes?: CreateStory[];
  nonProfitImpactsAttributes?: CreateNonProfitImpacts[];
  cause?: CreateCause;
}
