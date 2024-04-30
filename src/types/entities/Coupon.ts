export default interface Coupon {
  id: string;
  numberOfTickets?: number;
  expirationDate?: Date;
  availableQuantity?: number;
  rewardText?: string;
  createdAt: Date;
  updatedAt: Date;
}
