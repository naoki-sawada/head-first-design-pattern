import { GumballMachine } from "./GumballMachine";
import { State } from "./State";

export class NoQuarterState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("You inserted a quarter");
    this.gumballMachine.setState(this.gumballMachine.hasQuarterState);
  }

  ejectQuarter(): void {
    console.log("No refunds, you haven't inserted a quarter yet.");
  }

  turnCrank(): void {
    console.log("You turned the crank, but you haven't inserted a quarter");
  }

  dispense(): void {
    console.log("Please insert a quarter");
  }
}
