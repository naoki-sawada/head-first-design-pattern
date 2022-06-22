import { BaseState } from "./BaseState";
import { GumballMachine } from "./GumballMachine";

export class SoldOutState extends BaseState {
  constructor(gumballMachine: GumballMachine) {
    super(gumballMachine);
  }

  public override refill(): void {
    console.log("Refilled");
    this.gumballMachine.setState(this.gumballMachine.noQuarterState);
  }
}
