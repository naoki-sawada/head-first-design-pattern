import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export class Waitperson {
  private menus: Menu[];

  constructor(menus: Menu[]) {
    this.menus = menus;
  }

  public printMenuAll() {
    for (const menu of this.menus) {
      const iterator = menu.createIterator();
      this.printMenu(iterator);
    }
  }

  private printMenu(iterator: IterableIterator<MenuItem>): void {
    for (const menuItem of iterator) {
      console.log(
        `${menuItem.name}, ${menuItem.price} -- ${menuItem.description}`
      );
    }
  }
}
