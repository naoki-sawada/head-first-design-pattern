import { BaseState } from "./BaseState";
import { GumballMachine } from "./GumballMachine";

export class HasQuarterState extends BaseState {
  constructor(gumballMachine: GumballMachine) {
    super(gumballMachine);
  }

  public override ejectQuarter(): void {
    console.log("Refunded");
    this.gumballMachine.setState(this.gumballMachine.noQuarterState);
  }

  public override turnCrank(): void {
    console.log("You turned the crank");

    const winner = Math.floor(Math.random() * 10);
    if (winner === 0 && this.gumballMachine.getCount() > 1) {
      this.gumballMachine.setState(this.gumballMachine.winnerState);
      return;
    }

    this.gumballMachine.setState(this.gumballMachine.soldState);
  }
}
