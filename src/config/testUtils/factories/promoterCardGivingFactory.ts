import PromoterCardGiving from "types/apiResponses/PromoterCardGiving";
import { Categories } from "types/enums";

function promoterCardGivingFactory(
  params: Partial<PromoterCardGiving> = {},
): PromoterCardGiving {
  const defaultValues: PromoterCardGiving = {
    crypto_amount: 9.52,
    id: 23,
    offer: {
      active: true,
      createdAt: "2022-06-28 16:38:29 UTC",
      currency: "usd",
      category: Categories.DIRECT_CONTRIBUTION,
      id: 5,
      price: "$10.00",
      gateway: "stripe",
      externalId: "price_1J5Y2nG2ZvKYlo2CJ5X2nG2Z",
      priceCents: 1000,
      priceValue: 10,
      subscription: false,
      updatedAt: "2022-06-28 16:38:29 UTC",
      positionOrder: 1,
      title: "Test Offer",
    },
    paid_date: "2022-07-13 19:31:15 UTC",
  };
  return Object.assign(defaultValues, params) as PromoterCardGiving;
}

export default promoterCardGivingFactory;
