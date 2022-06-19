import { MenuComposite } from "./MenuComposite";

export class MenuItem extends MenuComposite {
  public readonly name: string;
  public readonly description: string;
  public readonly vegetarian: boolean;
  public readonly price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  public print(): void {
    console.log(
      ` ${this.name} ${this.vegetarian ? "(v)" : ""}, ${this.price} -- ${
        this.description
      }`
    );
  }
}
