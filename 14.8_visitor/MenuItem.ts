import { Ingredient } from "./Ingredient";
import { Item } from "./Item";
import { Visitor } from "./Visitor";

export class MenuItem implements Item {
  private name: string;
  private description: string;
  private price: number;
  private ingredients: Ingredient[];

  constructor(name: string, description: string, price: number) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = [];
  }

  public add(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  public getChild(index: number): Ingredient {
    return this.ingredients[index];
  }

  public print(): void {
    console.log(`${this.name} - ${this.description} - ${this.price}`);
  }

  public accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}
