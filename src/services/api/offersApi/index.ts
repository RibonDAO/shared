import { AxiosResponse } from "axios";
import Offer from "types/entities/Offer";
import { Categories } from "types/enums/Categories";
import { Currencies } from "types/enums/Currencies";
import { apiGet } from "..";

const offersApi = {
  getOffers: (
    currency: Currencies,
    subscription: boolean,
    category: Categories,
  ): Promise<AxiosResponse<Offer[]>> =>
    apiGet(
      `givings/offers?currency=${currency.toLowerCase()}&subscription=${subscription}&category=${category}`,
    ),
  getOffer: (id: number): Promise<AxiosResponse<Offer>> =>
    apiGet(`givings/offers/${id}`),
};

export default offersApi;
