import { Quackable } from "./Quackable";

export class DuckSimulator {
  constructor() {}

  public simulate(duck: Quackable): void {
    duck.quack();
  }
}
