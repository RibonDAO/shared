import { useApi } from "hooks/useApi";
import warmGlowMessagesApi from "services/api/warmGlowMessagesApi";
import { WarmGlowMessage } from "types/entities/WarmGlowMessage";

function useWarmGlowMessages() {
  const {
    data: warmGlowMessage,
    isLoading,
    refetch,
  } = useApi<WarmGlowMessage>({
    key: "warmGlowMessage",
    fetchMethod: () => warmGlowMessagesApi.getRandomWarmGlowMessage(),
  });

  return {
    warmGlowMessage,
    isLoading,
    refetch,
  };
}

export default useWarmGlowMessages;
