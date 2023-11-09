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
import { useCauses, useFreeDonationCauses } from "./apiHooks/useCauses";
import useCryptoTransaction from "./apiHooks/useCryptoTransaction";
import useDonations from "./apiHooks/useDonations";
import useImpact from "./apiHooks/useImpact";
import useLegacyImpact from "./apiHooks/useLegacyImpact";
import useIntegration from "./apiHooks/useIntegration";
import useIntegrationImpact from "./apiHooks/useIntegrationImpact";
import useNonProfitImpact from "./apiHooks/useNonProfitImpact";
import { useNonProfits, useFreeDonationNonProfits } from "./apiHooks/useNonProfits";
import useOffers from "./apiHooks/useOffers";
import usePromoterCardGivings from "./apiHooks/usePromoterCardGivings";
import useSources from "./apiHooks/useSources";
import useStories from "./apiHooks/useStories";
import useUsers from "./apiHooks/useUsers";
import useStatistics from "./apiHooks/useStatistics";
import useArticles from "./apiHooks/useArticles";
import useCompletedTasks from "./apiHooks/useCompletedTasks";
import useTasksStatistics from "./apiHooks/useTasksStatistics";
import useLegacyContributions from "./apiHooks/useLegacyContributions";
import useChains from "./apiHooks/useChains";
import useFirstAccessToIntegration from "./apiHooks/useFirstAccessIntegration";
import useImpressionCards from "./apiHooks/useImpressionCards";
import useContributions from "./apiHooks/useContributions";
import useSubscriptions from "./apiHooks/useSubscriptions";
import useUserConfig from "./apiHooks/useUserConfig";
import useUserDonations from "./userHooks/useUserDonations";

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
  useFreeDonationCauses,
  useCryptoTransaction,
  useDonations,
  useImpact,
  useLegacyImpact,
  useLegacyContributions,
  useIntegration,
  useIntegrationImpact,
  useNonProfitImpact,
  useNonProfits,
  useFreeDonationNonProfits,
  useOffers,
  usePromoterCardGivings,
  useFirstAccessToIntegration,
  useSources,
  useStories,
  useUsers,
  useStatistics,
  initializeHooks,
  QueryClient,
  QueryClientProvider,
  useQuery,
  UseQueryOptions,
  useCompletedTasks,
  useTasksStatistics,
  useChains,
  useImpressionCards,
  useContributions,
  useSubscriptions,
  useUserConfig,
  useUserDonations,
};
