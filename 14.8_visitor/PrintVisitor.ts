import { Ingredient } from "./Ingredient";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Visitor } from "./Visitor";

export class PrintVisitor implements Visitor {
  constructor() {}

  public visit(menu: Menu): void;
  public visit(menuItem: MenuItem): void;
  public visit(ingredient: Ingredient): void;
  public visit(ingredient: unknown): void {
    if (ingredient instanceof Menu) {
      this.visitMenu(ingredient);
    } else if (ingredient instanceof MenuItem) {
      this.visitMenuItem(ingredient);
    } else if (ingredient instanceof Ingredient) {
      this.visitIngredient(ingredient);
    } else {
      throw new Error("unsupported operation");
    }
  }

  private visitMenu(menu: Menu): void {
    console.log("Visiting menu: ");
    menu.print();
  }

  private visitMenuItem(menuItem: MenuItem): void {
    console.log("Visiting menu item: ");
    menuItem.print();
  }

  private visitIngredient(ingredient: Ingredient): void {
    console.log("Visiting ingredient: ");
    ingredient.print();
  }
}
