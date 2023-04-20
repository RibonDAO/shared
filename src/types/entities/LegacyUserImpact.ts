import LegacyNonProfit from "types/entities/LegacyNonProfit";

export default interface LegacyUserImpact {
  createdAt: string;
  donationsCount: number;
  legacyNonProfit: LegacyNonProfit;
  totalDonatedUsd: number;
  totalImpact: string;
  updatedAt: string;
}
