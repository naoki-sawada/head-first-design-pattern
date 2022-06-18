import { CaffeineBeverage } from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage {
  constructor() {
    super();
  }

  protected brew(): void {
    console.log("steep tea bag");
  }

  protected addCondiments(): void {
    console.log("add a lemon");
  }
}
