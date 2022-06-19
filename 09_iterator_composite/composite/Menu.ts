import { MenuComposite } from "./MenuComposite";

export class Menu extends MenuComposite {
  private menuComposites: MenuComposite[];
  public readonly name: string;
  public readonly description: string;

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
    this.menuComposites = [];
  }

  public add(menuComposite: MenuComposite): void {
    this.menuComposites.push(menuComposite);
  }

  public getChild(index: number): MenuComposite {
    return this.menuComposites[index];
  }

  public print(): void {
    console.log(`\n ${this.name} -- ${this.description}`);
    console.log("-----------------------");
    this.menuComposites.forEach((composite) => {
      composite.print();
    });
  }
}
