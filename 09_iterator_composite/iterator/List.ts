export default class List<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getItem(index: number): T {
    return this.items[index];
  }

  public getSize(): number {
    return this.items.length;
  }
}
