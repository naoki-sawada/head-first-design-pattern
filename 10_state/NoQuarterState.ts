import { BaseState } from "./BaseState";
import { GumballMachine } from "./GumballMachine";

export class NoQuarterState extends BaseState {
  constructor(gumballMachine: GumballMachine) {
    super(gumballMachine);
  }

  public override insertQuarter(): void {
    console.log("You inserted a quarter");
    this.gumballMachine.setState(this.gumballMachine.hasQuarterState);
  }
}
