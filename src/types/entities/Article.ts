import Author from "./Author";

export default interface Article {
  id: number;
  title: string;
  imageUrl: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  publishedAtInWords: string;
  link?: string;
  author: Author;
}
