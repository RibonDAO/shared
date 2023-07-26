import causesApi from "services/api/causesApi";
import Cause from "types/entities/Cause";
import { useApi } from "../../useApi";

export function useCauses(withPoolBalance = false) {
  const {
    data: causes,
    isLoading,
    refetch,
  } = useApi<Cause[]>({
    key: "causes",
    fetchMethod: () => causesApi.getCauses(withPoolBalance),
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
