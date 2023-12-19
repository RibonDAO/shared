export default interface ContributionStats {
  initialAmount: string;
  usedAmount: string;
  usagePercentage: number;
  remainingAmount: string;
  totalTickets: number;
  totalDonors: number;
  totalContributors: number;
  avgDonationsPerPerson: number;
  boostAmount: string;
  totalAmountToCause: string;
  ribonFee: number;
  boostNewContributors: number;
  boostNewPatrons: number;
  currentIncreasePercentage: number;
}
