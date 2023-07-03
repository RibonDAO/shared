import PersonPayment from "./PersonPayment";
import ContributionBalance from "./ContributionBalance";
import ContributionStats from "./ContributionStats";
import NonProfit from "./NonProfit";
import Cause from "./Cause";

export default interface Contribution {
  id: number;
  contributionBalance: ContributionBalance;
  generatedFeeCents: number;
  label: string;
  liquidValueCents: number;
  usdValueCents: number;
  personPayment: PersonPayment;
  updatedAt: string;
  createdAt: string;
  stats: ContributionStats;
  receiver?: NonProfit | Cause;
}
