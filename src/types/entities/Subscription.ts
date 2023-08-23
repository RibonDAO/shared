import PersonPayment from "./PersonPayment";

export interface Subscription {
  id: string | number;
  status: string;
  cancelDate: string;
  personPayments: PersonPayment[];
}
