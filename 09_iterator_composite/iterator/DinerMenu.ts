import { MenuItem } from "./MenuItem";
import { DinerMenuIterator } from "./DinerMenuIterator";
import { Menu } from "./Menu";

export class DinerMenu implements Menu {
  public static MAX_ITEMS = 6;
  private menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];

    this.addItem(
      "Vegetarian BLT",
      "Whole wheat bread sandwich with lettuce, tomato and (fake) bacon",
      true,
      2.99
    );
    this.addItem(
      "BLT",
      "Whole wheat bread sandwich with lettuce, tomato and bacon",
      false,
      2.99
    );
    this.addItem("today's soup", "today's soup with potato salad", true, 3.29);
    this.addItem(
      "Hotdog",
      "Hot dog with sauerkraut, relish, onions and cheese",
      false,
      3.05
    );
  }

  private addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    if (this.menuItems.length >= DinerMenu.MAX_ITEMS) {
      return;
    }
    this.menuItems.push(menuItem);
  }

  public createIterator(): IterableIterator<MenuItem> {
    return new DinerMenuIterator(this.menuItems);
  }
}
