import couponsApi from "services/api/couponsApi";

function useCoupons() {
  async function canCollectByCoupon(
    couponId: string | number,
    platform: string,
    email: string,
  ) {
    const { data } = await couponsApi.canCollectByCouponId(
      email,
      platform,
      couponId,
    );

    return data;
  }

  async function collectByCoupon(
    couponId: string | number,
    platform: string,
    email: string,
  ) {
    const { data } = await couponsApi.collectByCouponId(email, platform, couponId);

    return data;
  }

  return {
    canCollectByCoupon,
    collectByCoupon,
  };
}

export default useCoupons;
