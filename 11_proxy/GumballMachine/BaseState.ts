import { GumballMachine } from "./GumballMachine";
import { State } from "./State";

export class BaseState implements State {
  protected gumballMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  public insertQuarter(): void {
    console.log("You can't insert a quarter");
  }
  public ejectQuarter(): void {
    console.log("You can't eject a quarter");
  }
  public turnCrank(): void {
    console.log("You can't turn the crank");
  }
  public dispense(): void {
    console.log("Not allowed to dispense");
  }
  public refill(): void {
    console.log("Not allowed to refill");
  }
}
