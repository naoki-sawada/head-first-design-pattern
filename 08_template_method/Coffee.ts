import { CaffeineBeverage } from "./CaffeineBeverage";

export class Coffee extends CaffeineBeverage {
  constructor() {
    super();
  }

  protected brew(): void {
    console.log("drip coffee with a filter");
  }

  protected addCondiments(): void {
    console.log("add sugar and milk");
  }
}
