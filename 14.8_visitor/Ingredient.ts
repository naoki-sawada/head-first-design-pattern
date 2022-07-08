import { Item } from "./Item";
import { Visitor } from "./Visitor";

export class Ingredient implements Item {
  private name: string;
  private healthRating: number;
  private calories: number;
  private protein: number;
  private carbs: number;

  constructor(
    name: string,
    healthRating: number,
    calories: number,
    protein: number,
    carbs: number
  ) {
    this.name = name;
    this.healthRating = healthRating;
    this.calories = calories;
    this.protein = protein;
    this.carbs = carbs;
  }

  public getState(): object {
    return {
      healthRating: this.healthRating,
      calories: this.calories,
      protein: this.protein,
      carbs: this.carbs,
    };
  }

  public print(): void {
    console.log(
      `${this.name} - ${this.healthRating} - ${this.calories} - ${this.protein} - ${this.carbs}`
    );
  }

  public accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}
