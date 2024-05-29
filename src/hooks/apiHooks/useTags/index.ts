import { useApi } from "hooks/useApi";
import tagsApi from "services/api/tagsApi";
import Tag from "types/entities/Tag";

export function useTags() {
  const {
    data: tags,
    isLoading,
    refetch,
  } = useApi<Tag[]>({
    key: "tags",
    fetchMethod: tagsApi.getTags,
    options: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  });

  console.log(tags);
  return { tags: tags || [], isLoading, refetch };
}
