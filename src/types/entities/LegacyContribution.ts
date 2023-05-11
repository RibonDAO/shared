import User from "./User";

export default interface LegacyContribution {
  id: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  user: User;
  valueCents: number;
  value: string;
  day: string;
  legacyPaymentId: number;
  legacyPaymentPlatform: string;
  legacyPaymentMethod: string;
  fromSubscription: boolean;
}
