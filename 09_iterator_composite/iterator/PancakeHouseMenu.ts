import List from "./List";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { PancakeHouseMenuIterator } from "./PancakeHouseMenuIterator";

export class PancakeHouseMenu implements Menu {
  private menuItems: List<MenuItem>;

  constructor() {
    this.menuItems = new List<MenuItem>();

    this.addItem(
      "K&B's pancake breakfast",
      "Pancakes with scrambled eggs and toast",
      true,
      2.99
    );
    this.addItem(
      "Pancake breakfast",
      "Pancakes with fried eggs and sausages",
      false,
      2.99
    );
    this.addItem("blueberry pancake", "fresh blueberry pancakes", true, 3.49);
    this.addItem(
      "Waffle",
      "Waffle with blueberries or strawberries",
      true,
      3.59
    );
  }

  private addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.addItem(menuItem);
  }

  public createIterator(): IterableIterator<MenuItem> {
    return new PancakeHouseMenuIterator(this.menuItems);
  }
}
