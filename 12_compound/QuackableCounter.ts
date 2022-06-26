import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { Quackable } from "./Quackable";

export class QuackableCounter implements Quackable {
  private duck: Quackable;
  private static numberOfQuacks: number = 0;
  private observable: Observable;

  constructor(duck: Quackable) {
    this.duck = duck;
    this.observable = new Observable(this);
  }

  public quack(): void {
    this.duck.quack();
    QuackableCounter.numberOfQuacks++;
    this.notifyObservers();
  }

  public static getNumberOfQuacks(): number {
    return QuackableCounter.numberOfQuacks;
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();
  }

  public toString(): string {
    return this.duck.toString();
  }
}
