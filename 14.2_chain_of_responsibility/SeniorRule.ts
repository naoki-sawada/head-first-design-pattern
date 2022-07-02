import { Rule } from "./Rule";

export class SeniorRule extends Rule {
  constructor() {
    super();
  }

  protected canApply(age: number): boolean {
    return 65 <= age;
  }
}
