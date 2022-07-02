import { Rule } from "./Rule";

export class ChildRule extends Rule {
  constructor() {
    super();
  }

  protected canApply(age: number): boolean {
    return 0 <= age && age < 18;
  }
}
