import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export class CafeMenu implements Menu {
  private menuItems: Map<string, MenuItem>;

  constructor() {
    this.menuItems = new Map();

    this.addItem("1", "Hamburger", "Standard hamburger", false, 1.99);
    this.addItem("2", "Cheese hamburger", "Hamburger with cheese", false, 2.99);
    this.addItem(
      "3",
      "Big hamburger",
      "Very huge hamburger with cheese, egg and bacon",
      false,
      5.99
    );
    this.addItem("4", "French fries", "Salted french fries", true, 1.59);
  }

  private addItem(
    key: string,
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.set(key, menuItem);
  }

  public createIterator(): IterableIterator<MenuItem> {
    return this.menuItems.values();
  }
}
