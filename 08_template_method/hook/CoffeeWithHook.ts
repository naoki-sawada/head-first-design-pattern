import getUserInput from "./getUserInput";
import { CaffeineBeverageWithHook } from "./CaffeineBeverageWithHook";

export class CoffeeWithHook extends CaffeineBeverageWithHook {
  constructor() {
    super();
  }

  protected brew(): void {
    console.log("drip coffee with a filter");
  }

  protected addCondiments(): void {
    console.log("add sugar and milk");
  }

  protected override async customerWantsCondiments(): Promise<boolean> {
    const answer = await this.getUserInput();
    if (answer.toLowerCase().includes("y")) {
      return true;
    }
    return false;
  }

  private async getUserInput(): Promise<string> {
    return getUserInput("Do you want to add sugar and milk to your coffee?: ");
  }
}
