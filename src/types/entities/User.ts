import Integration from "./Integration";
import Subscription from "./Subscription";

export default interface User {
  id: number;
  email: string;
  lastDonationAt?: string;
  lastDonatedCause?: number;
  donateNative?: boolean;
  company?: Integration;
  directTransferSubscription?: Subscription
}
