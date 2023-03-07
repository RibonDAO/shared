import { useCallback, useState } from "react";
import articlesApi from "services/api/articlesApi";
import Article from "types/entities/Article";

function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);

  const getArticles = useCallback(async () => {
    const { data: allArticles } = await articlesApi.getArticlesList({
      page,
      perPage: 15,
      sort: "published_at",
      sortDir: "desc",
    });

    setArticles((oldArticles) => [...oldArticles, ...allArticles]);

    return allArticles;
  }, [page]);

  function incrementPage() {
    setPage((oldPage) => oldPage + 1);
  }

  async function getArticle(id: any) {
    const { data: article } = await articlesApi.getArticle(id);

    return article;
  }

  return {
    articles,
    getArticles,
    incrementPage,
    getArticle,
  };
}

export default useArticles;
