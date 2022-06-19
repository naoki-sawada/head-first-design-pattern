import { MenuItem } from "./MenuItem";
import List from "./List";

export class PancakeHouseMenuIterator implements IterableIterator<MenuItem> {
  private items: List<MenuItem>;
  private position: number;

  constructor(items: List<MenuItem>) {
    this.items = items;
    this.position = 0;
  }

  public next(): IteratorResult<MenuItem> {
    return { done: !this.hasNext(), value: this.nextItem() };
  }

  public [Symbol.iterator](): IterableIterator<MenuItem> {
    return this;
  }

  private nextItem(): MenuItem {
    const menuItem = this.items.getItem(this.position);
    this.position += 1;
    return menuItem;
  }

  private hasNext(): boolean {
    if (
      this.position >= this.items.getSize() ||
      this.items.getItem(this.position) === null
    ) {
      return false;
    }
    return true;
  }
}
