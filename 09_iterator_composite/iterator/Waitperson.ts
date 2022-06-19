import { DinerMenu } from "./DinerMenu";
import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { Iterator } from "./Iterator";

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

  private printMenu(iterator: Iterator): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(
        `${menuItem.name}, ${menuItem.price} -- ${menuItem.description}`
      );
    }
  }
}
