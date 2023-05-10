import User from "./User";

export default interface LegacyContribution {
  createdAt: string;
  updatedAt: string;
  userId: number;
  user: User;
  valueCents: number;
  day: string;
  legacyPaymentId: number;
  legacyPaymentPlatform: string;
  legacyPaymentMethod: string;
  fromSubscription: boolean;
}
