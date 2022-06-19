import { MenuItem } from "./MenuItem";

export interface Menu {
  createIterator(): IterableIterator<MenuItem>;
}
