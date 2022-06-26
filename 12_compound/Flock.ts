import { Observer } from "./Observer";
import { Quackable } from "./Quackable";

export class Flock implements Quackable {
  private quackers: Quackable[] = [];

  constructor() {}

  public add(quacker: Quackable): void {
    this.quackers.push(quacker);
  }

  public quack(): void {
    this.quackers.forEach((quacker) => quacker.quack());
  }

  public registerObserver(observer: Observer): void {
    this.quackers.forEach((quacker) => quacker.registerObserver(observer));
  }

  public notifyObservers(): void {}
}
