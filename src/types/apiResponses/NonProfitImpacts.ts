export interface CreateNonProfitImpacts {
  id?: number;
  endDate?: string;
  startDate?: string;
  usdCentsToOneImpactUnit?: string;
  measurementUnit?: string;
  impactDescription?: string;
  donorRecipient?: string;
}
