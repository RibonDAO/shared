import IntegrationTask from "./IntegrationTask";
import IntegrationWallet from "./IntegrationWallet";

export default interface Integration {
  id: number;
  name: string;
  walletAddress?: string;
  url?: string;
  logo?: any;
  created_at?: string;
  updated_at?: string;
  integrationTask?: IntegrationTask;
  integrationWallet?: IntegrationWallet;
  integrationAddress?: string;
  uniqueAddress?: string;
  status: string;
  webhookUrl?: string;
  ticketAvailabilityInMinutes: number | null;
  integrationTaskAttributes?: IntegrationTask | null;
  mobilityAttributes?: string[];
  metadata?: Record<string, any>;
}
