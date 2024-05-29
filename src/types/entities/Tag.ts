import { NonProfit } from "..";

export default interface Tag {
  id: number;
  name: string;
  status: string;
  nonProfits?: NonProfit[];
}
