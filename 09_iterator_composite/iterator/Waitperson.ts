import { DinerMenu } from "./DinerMenu";
import { MenuItem } from "./MenuItem";
import { PancakeHouseMenu } from "./PancakeHouseMenu";

export class Waitperson {
  private pancakeHouseMenu: PancakeHouseMenu;
  private dinerMenu: DinerMenu;

  constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
  }

  public printMenuAll() {
    const pancakeIterator = this.pancakeHouseMenu.createIterator();
    const dinerIterator = this.dinerMenu.createIterator();
    console.log("-- pancake menu --");
    this.printMenu(pancakeIterator);
    console.log("-- dinner menu --");
    this.printMenu(dinerIterator);
  }

  private printMenu(iterator: IterableIterator<MenuItem>): void {
    for (const menuItem of iterator) {
      console.log(
        `${menuItem.name}, ${menuItem.price} -- ${menuItem.description}`
      );
    }
  }
}
