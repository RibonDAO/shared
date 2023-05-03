import CreateAuthor from "types/apiResponses/CreateAuthor";

export default interface CreateArticle {
  id?: number;
  title: string;
  image: string;
  visible?: boolean;
  publishedAt?: string;
  link?: string;
  author?: CreateAuthor;
  language?: string;
}
