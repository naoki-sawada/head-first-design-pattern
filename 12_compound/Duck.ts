import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { Quackable } from "./Quackable";

export class MallardDuck implements Quackable {
  private observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  public quack(): void {
    console.log("Quack");
    this.notifyObservers();
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();
  }

  public toString(): string {
    return "Mallard Duck";
  }
}

export class RedheadDuck implements Quackable {
  private observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  public quack(): void {
    console.log("Quack");
    this.notifyObservers();
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();
  }

  public toString(): string {
    return "Redhead Duck";
  }
}

export class DuckCall implements Quackable {
  private observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  public quack(): void {
    console.log("Quack");
    this.notifyObservers();
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();
  }

  public toString(): string {
    return "Duck Call";
  }
}

export class RubberDuck implements Quackable {
  private observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  public quack(): void {
    console.log("Squeak");
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();
  }

  public toString(): string {
    return "Rubber Duck";
  }
}
