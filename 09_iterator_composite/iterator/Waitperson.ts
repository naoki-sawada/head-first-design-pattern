import { CafeMenu } from "./CafeMenu";
import { DinerMenu } from "./DinerMenu";
import { MenuItem } from "./MenuItem";
import { PancakeHouseMenu } from "./PancakeHouseMenu";

export class Waitperson {
  private pancakeHouseMenu: PancakeHouseMenu;
  private cafeMenu: CafeMenu;
  private dinerMenu: DinerMenu;

  constructor(
    pancakeHouseMenu: PancakeHouseMenu,
    cafeMenu: CafeMenu,
    dinerMenu: DinerMenu
  ) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.cafeMenu = cafeMenu;
    this.dinerMenu = dinerMenu;
  }

  public printMenuAll() {
    const pancakeIterator = this.pancakeHouseMenu.createIterator();
    const cafeIterator = this.cafeMenu.createIterator();
    const dinerIterator = this.dinerMenu.createIterator();
    console.log("-- pancake menu --");
    this.printMenu(pancakeIterator);
    console.log("-- cafe menu --");
    this.printMenu(cafeIterator);
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
