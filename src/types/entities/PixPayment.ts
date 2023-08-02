export default interface PixPayment {
  country: string;
  state: string;
  city: string;
  taxId: string;
  offerId: number;
  integrationId: string | number;
  email: string;
  name: string;
  causeId?: number;
  nonProfitId?: number;
}
