import { Cheese, ReggianoCheese } from "./Ingredient/Cheese";
import { Clam, FreshClams } from "./Ingredient/Clam";
import { Dough, ThinCrustDough } from "./Ingredient/Dough";
import { Pepperoni, SlicePepperoni } from "./Ingredient/Pepperoni";
import { MarinaraSource, Sauce } from "./Ingredient/Sauce";
import {
  Garlic,
  Mushroom,
  Onion,
  ReadPepper,
  Veggie,
} from "./Ingredient/Veggie";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  public createDough(): Dough {
    return new ThinCrustDough();
  }

  public createSauce(): Sauce {
    return new MarinaraSource();
  }

  public createCheese(): Cheese {
    return new ReggianoCheese();
  }

  public createVeggies(): Veggie[] {
    return [new Garlic(), new Onion(), new Mushroom(), new ReadPepper()];
  }

  public createPepperoni(): Pepperoni {
    return new SlicePepperoni();
  }

  public createClam(): Clam {
    return new FreshClams();
  }
}
