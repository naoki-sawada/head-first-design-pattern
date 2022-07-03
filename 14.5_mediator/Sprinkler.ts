import { Component } from "./Component";
import { Mediator } from "./Mediator";

export class Sprinkler extends Component {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  public start(): void {
    this.mediator.notify(this, "start");
  }

  public stop(): void {
    this.mediator.notify(this, "stop");
  }
}
