import { GumballMachine } from "./GumballMachine";
import { State } from "./State";

export class SoldOutState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("You can't insert quarters. Sold out");
  }

  ejectQuarter(): void {
    console.log("No refunds, you haven't put in quarters yet.");
  }

  turnCrank(): void {
    console.log("You can't turn the crank");
  }

  dispense(): void {
    console.log("You can't put out a gumball");
  }
}
