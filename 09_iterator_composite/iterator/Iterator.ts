import { MenuItem } from "./MenuItem";

export interface Iterator {
  hasNext(): boolean;
  next(): MenuItem;
}
