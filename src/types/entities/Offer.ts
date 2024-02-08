import { Categories } from "types/enums/Categories";

export default interface Offer {
  id: number;
  currency: "usd" | "brl";
  category: Categories;
  subscription: boolean;
  priceCents: number;
  price: string;
  gateway: string;
  externalId: string;
  priceValue: number;
  active: boolean;
  title?: string;
  positionOrder: number;
  createdAt?: string;
  updatedAt?: string;
}
