import { Ingredient } from "./Ingredient";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export interface Visitor {
  visit(menu: Menu): void;
  visit(menuItem: MenuItem): void;
  visit(ingredient: Ingredient): void;
}
