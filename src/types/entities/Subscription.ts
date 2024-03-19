import Cause from "./Cause";
import NonProfit from "./NonProfit";
import Offer from "./Offer";
import PersonPayment from "./PersonPayment";

export default interface Subscription {
  id: string | number;
  status: string;
  cancelDate: string;
  createdAt: string;
  nextPaymentAttempt: string;
  offer: Offer;
  receiver: NonProfit | Cause;
  personPayments: PersonPayment[];
}
