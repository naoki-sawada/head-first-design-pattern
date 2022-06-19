import { MenuItem } from "./MenuItem";

export class DinerMenuIterator implements IterableIterator<MenuItem> {
  private items: MenuItem[];
  private position: number;

  constructor(items: MenuItem[]) {
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
    const menuItem = this.items[this.position];
    this.position += 1;
    return menuItem;
  }

  private hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] === null
    ) {
      return false;
    }
    return true;
  }
}
