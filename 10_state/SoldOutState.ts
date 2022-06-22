import { BaseState } from "./BaseState";
import { GumballMachine } from "./GumballMachine";

export class SoldOutState extends BaseState {
  constructor(gumballMachine: GumballMachine) {
    super(gumballMachine);
  }
}
