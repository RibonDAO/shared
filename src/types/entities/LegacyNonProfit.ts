export default interface LegacyNonProfit {
  id: number;
  name: string;
  impactDescription: string;
  logoUrl: string;
  createdAt?: string;
  updatedAt?: string;
  costOfOneImpact: number;
  currentId: number;
  legacyId: number;
}
