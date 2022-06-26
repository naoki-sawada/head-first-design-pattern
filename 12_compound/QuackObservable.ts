import { Observer } from "./Observer";

export interface QuackObservable {
  registerObserver(observer: Observer): void;
  notifyObservers(): void;
}
