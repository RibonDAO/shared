import { initializeApi, InitializeApiProps } from "services/api";
import { useApi } from "./useApi";
import QueryClientComponent, {
  QueryClient,
  QueryClientProvider,
  useQuery,
  UseQueryOptions,
} from "./useApi/queryClient";
import useCanDonate from "./apiHooks/useCanDonate";
import useCardGivingFees from "./apiHooks/useCardGivingFees";
import useCauses from "./apiHooks/useCauses";
import useCryptoTransaction from "./apiHooks/useCryptoTransaction";
import useDonations from "./apiHooks/useDonations";
import useImpact from "./apiHooks/useImpact";
import useIntegration from "./apiHooks/useIntegration";
import useIntegrationImpact from "./apiHooks/useIntegrationImpact";
import useNonProfitImpact from "./apiHooks/useNonProfitImpact";
import useNonProfits from "./apiHooks/useNonProfits";
import useOffers from "./apiHooks/useOffers";
import usePromoterCardGivings from "./apiHooks/usePromoterCardGivings";
import useSources from "./apiHooks/useSources";
import useStories from "./apiHooks/useStories";
import useUsers from "./apiHooks/useUsers";
import useStatistics from "./apiHooks/useStatistics";
import useArticles from "./apiHooks/useArticles";

type InitializeHooksProps = {
  initializeApiOptions: InitializeApiProps;
};
function initializeHooks({ initializeApiOptions }: InitializeHooksProps) {
  initializeApi(initializeApiOptions);
}

export {
  useApi,
  QueryClientComponent,
  useArticles,
  useCanDonate,
  useCardGivingFees,
  useCauses,
  useCryptoTransaction,
  useDonations,
  useImpact,
  useIntegration,
  useIntegrationImpact,
  useNonProfitImpact,
  useNonProfits,
  useOffers,
  usePromoterCardGivings,
  useSources,
  useStories,
  useUsers,
  useStatistics,
  initializeHooks,
  QueryClient,
  QueryClientProvider,
  useQuery,
  UseQueryOptions,
};
