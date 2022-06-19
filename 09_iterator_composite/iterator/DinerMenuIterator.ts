import { MenuItem } from "./MenuItem";
import { Iterator } from "./Iterator";

export class DinerMenuIterator implements Iterator {
  private items: MenuItem[];
  private position: number;

  constructor(items: MenuItem[]) {
    this.items = items;
    this.position = 0;
  }

  public next(): MenuItem {
    const menuItem = this.items[this.position];
    this.position += 1;
    return menuItem;
  }

  public hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] === null
    ) {
      return false;
    }
    return true;
  }
}
