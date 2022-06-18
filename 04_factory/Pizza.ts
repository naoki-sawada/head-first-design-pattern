import { Cheese } from "./Ingredient/Cheese";
import { Clam } from "./Ingredient/Clam";
import { Dough } from "./Ingredient/Dough";
import { Pepperoni } from "./Ingredient/Pepperoni";
import { Sauce } from "./Ingredient/Sauce";
import { Veggie } from "./Ingredient/Veggie";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

export abstract class Pizza {
  name: string;

  dough: Dough;
  sauce: Sauce;
  veggies: Veggie[];
  cheese: Cheese;
  pepperoni: Pepperoni;
  clam: Clam;

  public abstract prepare(): void;

  public bake(): void {
    console.log("baking...");
  }

  public cut() {
    console.log("cutting...");
  }

  public box(): void {
    console.log("packing...");
  }
}

export class CheesePizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public prepare(): void {
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}

export class ClamPizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public prepare(): void {
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.clam = this.ingredientFactory.createClam();
  }
}
