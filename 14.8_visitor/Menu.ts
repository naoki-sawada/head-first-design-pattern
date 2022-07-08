import { Item } from "./Item";
import { MenuItem } from "./MenuItem";
import { Visitor } from "./Visitor";

export class Menu implements Item {
  private name: string;
  private menuItems: MenuItem[];

  constructor(name: string) {
    this.name = name;
    this.menuItems = [];
  }

  public add(menuItem: MenuItem): void {
    this.menuItems.push(menuItem);
  }

  public getChild(index: number): MenuItem {
    return this.menuItems[index];
  }

  public print(): void {
    console.log(`### ${this.name} ###`);
  }

  public accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}
