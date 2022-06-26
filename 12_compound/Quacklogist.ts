import { Observable } from "./Observable";
import { Observer } from "./Observer";

export class Quacklogist implements Observer {
  public update(observable: Observable): void {
    console.log(`Quacklogist: ${observable.duck} quacked`);
  }
}
