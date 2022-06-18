import { NYPizzaIngredientFactory } from "./NYPizzaIngredientFactory";
import { CheesePizza, ClamPizza, Pizza } from "./Pizza";

abstract class PizzaStore {
  abstract createPizza(item: string): Pizza;

  public orderPizza(item: string) {
    const pizza = this.createPizza(item);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }
}

export class NYPizzaStore extends PizzaStore {
  public createPizza(item: string): Pizza {
    const factory = new NYPizzaIngredientFactory();
    switch (item) {
      case "cheese":
        return new CheesePizza(factory);
      case "clam":
        return new ClamPizza(factory);
      default:
        throw new Error(`Invalid item: ${item}`);
    }
  }
}
