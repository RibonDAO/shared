import { AxiosResponse } from "axios";
import Article from "types/entities/Article";
import { apiGetWithParams, apiGet } from "..";

type ArticlesList = {
  perPage?: number;
  page?: number;
};

const articlesApi = {
  getArticlesList: ({
    perPage = 10,
    page = 1,
  }: ArticlesList): Promise<AxiosResponse<Article[]>> =>
    apiGetWithParams("news/articles", {
      per: perPage,
      page,
    }),
  getArticle: (id: any): Promise<AxiosResponse<Article>> =>
    apiGet(`news/articles/${id}`),
};

export default articlesApi;
