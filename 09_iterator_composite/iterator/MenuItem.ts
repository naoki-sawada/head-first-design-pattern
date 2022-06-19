export class MenuItem {
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
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }
}
