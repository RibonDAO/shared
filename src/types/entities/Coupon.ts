import CouponMessage from "./CouponMessage";

export default interface Coupon {
  id: string;
  numberOfTickets?: number;
  expirationDate?: Date;
  availableQuantity?: number;
  couponMessage?: CouponMessage;
  createdAt: Date;
  updatedAt: Date;
}
