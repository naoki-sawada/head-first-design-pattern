import { GumballMachine } from "./GumballMachine";
import { State } from "./State";

export class SoldState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("Waiting.... preparing to put out a gum ball");
  }

  ejectQuarter(): void {
    console.log("You are already turning the crank");
  }

  turnCrank(): void {
    console.log("You can't get another gumball by turning the crank twice");
  }

  dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.noQuarterState);
      return;
    }
    this.gumballMachine.setState(this.gumballMachine.soldOutState);
  }
}
