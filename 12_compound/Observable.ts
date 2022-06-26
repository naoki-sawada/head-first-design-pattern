import { Observer } from "./Observer";
import { Quackable } from "./Quackable";
import { QuackObservable } from "./QuackObservable";

export class Observable implements QuackObservable {
  private observers: Observer[] = [];
  public duck: Quackable;

  constructor(duck: Quackable) {
    this.duck = duck;
  }

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}
