import { GumballMachine } from "./GumballMachine";
import { State } from "./State";

export class HasQuarterState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("You can't insert quarters again");
  }

  ejectQuarter(): void {
    console.log("Refunded");
    this.gumballMachine.setState(this.gumballMachine.noQuarterState);
  }

  turnCrank(): void {
    console.log("You turned the crank");

    const winner = Math.floor(Math.random() * 10);
    if (winner === 0 && this.gumballMachine.getCount() > 1) {
      this.gumballMachine.setState(this.gumballMachine.winnerState);
      return;
    }

    this.gumballMachine.setState(this.gumballMachine.soldState);
  }

  dispense(): void {
    console.log("You can't put out a gumball");
  }
}
