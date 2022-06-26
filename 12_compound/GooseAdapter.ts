import { Goose } from "./Goose";
import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { Quackable } from "./Quackable";

export class GooseAdapter implements Quackable {
  private goose: Goose;
  private observable: Observable;

  constructor(goose: Goose) {
    this.goose = goose;
    this.observable = new Observable(this);
  }

  public quack(): void {
    this.goose.honk();
    this.notifyObservers();
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();
  }

  public toString(): string {
    return this.goose.toString();
  }
}
