import Pool from "./Pool";

export default interface Cause {
  id: number;
  name: string;
  mainImage?: string;
  coverImage?: string;
  logo?: string;
  active: boolean;
  pools: Pool[];
  coverImageDescription?: string;
  mainImageDescription?: string;
}
