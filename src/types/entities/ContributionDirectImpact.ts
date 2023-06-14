import NonProfit from "./NonProfit";

export default interface ContributionDirectImpact {
  formattedImpact: string[];
  totalAmountDonated: string;
  nonProfit: NonProfit;
}
