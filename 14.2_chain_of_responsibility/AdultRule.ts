import { Rule } from "./Rule";

export class AdultRule extends Rule {
  constructor() {
    super();
  }

  protected canApply(age: number): boolean {
    return 18 <= age && age < 65;
  }
}
