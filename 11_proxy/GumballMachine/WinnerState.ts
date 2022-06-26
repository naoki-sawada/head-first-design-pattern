import { BaseState } from "./BaseState";
import { GumballMachine } from "./GumballMachine";

export class WinnerState extends BaseState {
  constructor(gumballMachine: GumballMachine) {
    super(gumballMachine);
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
