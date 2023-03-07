import { AxiosResponse } from "axios";
import Article from "types/entities/Article";
import { apiGetWithParams, apiGet } from "..";

type ArticlesList = {
  perPage?: number;
  page?: number;
  sort?: string;
  sortDir?: string;
};

const articlesApi = {
  getArticlesList: ({
    perPage = 10,
    page = 1,
    sort = "published_at",
    sortDir = "desc",
  }: ArticlesList): Promise<AxiosResponse<Article[]>> =>
    apiGetWithParams("news/articles", {
      per: perPage,
      page,
      sort,
      sort_dir: sortDir,
    }),
  getArticle: (id: any): Promise<AxiosResponse<Article>> =>
    apiGet(`news/articles/${id}`),
};

export default articlesApi;
