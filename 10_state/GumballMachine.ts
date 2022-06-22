import { NoQuarterState } from "./NoQuarterState";
import { SoldState } from "./SoldState";
import { State } from "./State";
import { SoldOutState } from "./SoldOutState";
import { HasQuarterState } from "./HasQuarterState";
import { WinnerState } from "./WinnerState";

export class GumballMachine {
  public readonly soldOutState: State;
  public readonly noQuarterState: State;
  public readonly hasQuarterState: State;
  public readonly soldState: State;
  public readonly winnerState: State;

  private state: State;
  private count: number;

  constructor(numberGumBalls: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new WinnerState(this);

    this.count = numberGumBalls;
    if (numberGumBalls > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  public insertQuarter(): void {
    this.state.insertQuarter();
  }

  public ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  public turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  public setState(state: State): void {
    this.state = state;
  }

  public getCount(): number {
    return this.count;
  }

  public releaseBall(): void {
    if (this.count <= 0) return;
    this.count -= 1;
  }

  public refill(numberGumBalls: number): void {
    this.setGumballs(numberGumBalls);
    this.state.refill();
  }

  private setGumballs(numberGumBalls: number): void {
    if (numberGumBalls <= 0) {
      throw new Error("Invalid number of gumballs");
    }
    this.count = numberGumBalls;
  }
}
