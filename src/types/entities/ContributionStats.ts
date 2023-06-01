export default interface ContributionStats {
  initialAmount: number;
  formattedInitialAmount: string;
  usedAmount: number;
  formattedUsedAmount: string;
  remainingAmount: number;
  formattedRemainingAmount: string;
  totalTickets: number;
  avgDonationsPerPerson: number;
  boostAmount: number;
  formattedBoostAmount: string;
  totalIncreasePercentage: number;
  totalAmountToCause: number;
  ribonFee: number;
}
