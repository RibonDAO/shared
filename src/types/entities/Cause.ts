import Pool from "./Pool";
import NonProfit from "./NonProfit";

export default interface Cause {
  id: number;
  name: string;
  mainImage?: string;
  coverImage?: string;
  logo?: string;
  status: string;
  nonProfits?: NonProfit[];
  pools: Pool[];
  defaultPool?: string;
  coverImageDescription?: string;
  mainImageDescription?: string;
  withPoolBalance?: boolean;
}
