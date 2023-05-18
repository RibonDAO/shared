import { useApi } from "hooks/useApi";
import chainsApi from "services/api/chainsApi";
import Chain from "types/entities/Chain";

export default function useChains() {
  const {
    data: chains,
    isLoading,
    refetch,
  } = useApi<Chain[]>({
    key: "chains",
    fetchMethod: chainsApi.getChains,
  });

  return { chains, isLoading, refetch };
}
