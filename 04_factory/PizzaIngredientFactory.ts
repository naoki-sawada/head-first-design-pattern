import { Cheese } from "./Ingredient/Cheese";
import { Clam } from "./Ingredient/Clam";
import { Dough } from "./Ingredient/Dough";
import { Pepperoni } from "./Ingredient/Pepperoni";
import { Sauce } from "./Ingredient/Sauce";
import { Veggie } from "./Ingredient/Veggie";

export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggie[];
  createPepperoni(): Pepperoni;
  createClam(): Clam;
}
