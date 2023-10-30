import { useCallback, useState } from "react";
import articlesApi from "services/api/articlesApi";
import Article from "types/entities/Article";

function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [userArticles, setUserArticles] = useState<Article[]>([]);
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

  const getUserArticles = useCallback(async () => {
    const { data: allUserArticles } = await articlesApi.getUserArticlesList({
      page,
      perPage: 15,
      sort: "published_at",
      sortDir: "desc",
    });

    setUserArticles((oldUserArticles) => [...oldUserArticles, ...allUserArticles]);

    return allUserArticles;
  }, [page]);

  return {
    articles,
    userArticles,
    getArticles,
    incrementPage,
    getArticle,
    getUserArticles
  };
}

export default useArticles;
