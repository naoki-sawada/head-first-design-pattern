import { Mediator } from "./Mediator";

export class Component {
  protected mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }
}
