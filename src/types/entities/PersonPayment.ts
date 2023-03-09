import Offer from "./Offer";
import Cause from "./Cause";
import NonProfit from "./NonProfit";

export default interface PersonPayment {
  id: string;
  amountCents: number;
  cryptoAmount: number;
  offer: Offer;
  page: number;
  paidDate: string;
  payment_method: string;
  person: {
    id: string;
    customer: {
      email: string;
    };
    crypto_user: {
      wallet_address: string;
    };
  };
  serviceFees: number;
  receiver: NonProfit | Cause;
  status: string;
  totalItems: number;
  totalPages: number;
}
