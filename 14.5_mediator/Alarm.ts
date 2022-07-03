import { Component } from "./Component";
import { Mediator } from "./Mediator";

export class Alarm extends Component {
  private timer: NodeJS.Timer;

  constructor(mediator: Mediator) {
    super(mediator);
  }

  public setTime(time: number): void {
    console.log("Alarm set to " + time);
    this.reset();
    this.start(time);
  }

  private start(time: number): void {
    this.mediator.notify(this, "start");
    this.timer = setTimeout(() => {
      this.mediator.notify(this, "stop");
    }, time);
  }

  public reset(): void {
    this.mediator.notify(this, "reset");
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
