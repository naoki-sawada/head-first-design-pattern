import { AbstractDuckFactory } from "./AbstructDuckFactory";
import { DuckCall, MallardDuck, RedheadDuck, RubberDuck } from "./Duck";
import { Quackable } from "./Quackable";
import { QuackableCounter } from "./QuackableCounter";

export class DuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): Quackable {
    return new QuackableCounter(new MallardDuck());
  }
  public createRedheadDuck(): Quackable {
    return new QuackableCounter(new RedheadDuck());
  }
  public createDuckCall(): Quackable {
    return new QuackableCounter(new DuckCall());
  }
  public createRubberDuck(): Quackable {
    return new QuackableCounter(new RubberDuck());
  }
}
