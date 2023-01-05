import { NonProfit } from "../entities";

export default interface IntegrationImpact {
  totalDonations: number;
  totalDonors: number;
  totalDonorsTrend: number;
  totalDonationsTrend: number;
  impactPerNonProfit: [{
    nonProfit: NonProfit;
    impact: number;
  }];
}
