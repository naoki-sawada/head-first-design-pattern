import { MenuItem } from "./MenuItem";
import { Iterator } from "./Iterator";
import List from "./List";

export class PancakeHouseMenuIterator implements Iterator {
  private items: List<MenuItem>;
  private position: number;

  constructor(items: List<MenuItem>) {
    this.items = items;
    this.position = 0;
  }

  public next(): MenuItem {
    const menuItem = this.items.getItem(this.position);
    this.position += 1;
    return menuItem;
  }

  public hasNext(): boolean {
    if (
      this.position >= this.items.getSize() ||
      this.items.getItem(this.position) === null
    ) {
      return false;
    }
    return true;
  }
}
