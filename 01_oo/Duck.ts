import { FlyBehavior, FlyNoWay, FlyWithWings } from "./FlyBehavior";
import { MuteQuack, Quack, QuackBehavior } from "./QuackBehavior";

export class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  constructor() {
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }
}

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  public swim() {
    console.log("swimming!");
  }
}

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }
}
