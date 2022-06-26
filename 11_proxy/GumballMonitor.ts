import { GumballMachine } from "./GumballMachine";

export class GumballMonitor {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  public report(): void {
    console.log(`Gumball Machine: ${this.gumballMachine.getLocation()}`);
    console.log(
      `Current inventory: ${this.gumballMachine.getCount()} gumballs`
    );
    console.log(`Current state: ${this.gumballMachine.getStateName()}`);
  }
}
