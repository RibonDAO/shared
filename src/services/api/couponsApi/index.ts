import { AxiosResponse } from "axios";

import { apiPost } from "..";

const couponsApi = {
  canCollectByCouponId: (
    email: string,
    platform: string,
    couponId: string | number,
  ): Promise<AxiosResponse<any>> =>
    apiPost("coupons/can_collect_by_coupon_id", {
      email,
      platform,
      couponId,
    }),
  collectByCouponId: (
    email: string,
    platform: string,
    couponId: string | number,
  ): Promise<AxiosResponse<any>> =>
    apiPost("coupons/collect_by_coupon_id", {
      email, 
      platform,
      couponId,
    }),
};

export default couponsApi;