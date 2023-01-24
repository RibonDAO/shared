export default interface NonProfitImpact {
  id: number;
  endDate?: string;
  startDate?: string;
  usdCentsToOneImpactUnit?: string;
  measurementUnit?: string;
  impactDescription?: string;
  donorRecipient?: string;
}
