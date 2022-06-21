import { GumballMachine } from "./GumballMachine";
import { State } from "./State";

export class WinnerState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("error");
  }

  ejectQuarter(): void {
    console.log("error");
  }

  turnCrank(): void {
    console.log("error");
  }

  dispense(): void {
    this.gumballMachine.releaseBall();

    if (this.gumballMachine.getCount() === 0) {
      this.gumballMachine.setState(this.gumballMachine.soldOutState);
      return;
    }

    this.gumballMachine.releaseBall();
    console.log("You are winner! You can get two gum balls");

    if (this.gumballMachine.getCount() === 0) {
      this.gumballMachine.setState(this.gumballMachine.soldOutState);
      return;
    }

    this.gumballMachine.setState(this.gumballMachine.noQuarterState);
  }
}
