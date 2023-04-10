import causesApi from "services/api/causesApi";
import Cause from "types/entities/Cause";
import { useApi } from "../../useApi";

export function useCauses() {
  const {
    data: causes,
    isLoading,
    refetch,
  } = useApi<Cause[]>({
    key: "causes",
    fetchMethod: () => causesApi.getCauses(),
  });

  async function getCause(causeId: number) {
    const { data: cause } = await causesApi.getCause(causeId);

    return cause;
  }

  return {
    causes: causes || [],
    getCause,
    isLoading,
    refetch,
  };
}

export function useFreeDonationCauses() {
  const {
    data: causes,
    isLoading,
    refetch,
  } = useApi<Cause[]>({
    key: "causes",
    fetchMethod: () => causesApi.getFreeDonationCauses(),
  });

  async function getCause(causeId: number) {
    const { data: cause } = await causesApi.getCause(causeId);

    return cause;
  }

  return {
    causes: causes || [],
    getCause,
    isLoading,
    refetch,
  };
}
