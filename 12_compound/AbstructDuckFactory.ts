import { Quackable } from "./Quackable";

export abstract class AbstractDuckFactory {
  public abstract createMallardDuck(): Quackable;
  public abstract createRedheadDuck(): Quackable;
  public abstract createDuckCall(): Quackable;
  public abstract createRubberDuck(): Quackable;
}
