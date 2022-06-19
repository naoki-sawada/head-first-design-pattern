import { MenuComposite } from "./MenuComposite";

export class Waitperson {
  private allMenus: MenuComposite;

  constructor(allMenus: MenuComposite) {
    this.allMenus = allMenus;
  }

  public printMenu() {
    this.allMenus.print();
  }
}
