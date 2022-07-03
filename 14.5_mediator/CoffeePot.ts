import { Component } from "./Component";
import { Mediator } from "./Mediator";

export class CoffeePot extends Component {
  private timer: NodeJS.Timer;

  constructor(mediator: Mediator) {
    super(mediator);
  }

  public brew(): void {
    console.log("CoffeePot brewing");
    if (this.timer) {
      throw Error("CoffeePot is already brewing");
    }
    this.mediator.notify(this, "brew");
    this.timer = setTimeout(() => {
      this.mediator.notify(this, "done");
    }, 1000);
  }
}
