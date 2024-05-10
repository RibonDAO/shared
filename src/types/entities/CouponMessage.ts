export default interface CouponMessage {
  id: number;
  rewardText?: string;
  couponId: string;
  createdAt: Date;
  updatedAt: Date;
}