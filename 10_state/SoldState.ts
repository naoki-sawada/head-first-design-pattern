import { BaseState } from "./BaseState";
import { GumballMachine } from "./GumballMachine";

export class SoldState extends BaseState {
  constructor(gumballMachine: GumballMachine) {
    super(gumballMachine);
  }

  public override dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.noQuarterState);
      return;
    }
    this.gumballMachine.setState(this.gumballMachine.soldOutState);
  }
}
