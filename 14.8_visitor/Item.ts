import { Visitor } from "./Visitor";

export interface Item {
  accept(visitor: Visitor): void;
}
