import Offer from "./Offer";
import Cause from "./Cause";
import NonProfit from "./NonProfit";
import Customer from "./Customer";
import BigDonor from "./BigDonor";
import CryptoUser from "./CryptoUser";
import Patron from "./Patron";

export default interface PersonPayment {
  id: string;
  amountCents: number;
  cryptoAmount: number;
  offer: Offer;
  page: number;
  paidDate: string;
  paymentMethod: string;
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
  payer: Customer | BigDonor | CryptoUser | Patron;
  currency: "brl" | "usd";
  platform: string;
}
