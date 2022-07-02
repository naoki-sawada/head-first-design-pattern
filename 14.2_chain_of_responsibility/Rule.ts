export abstract class Rule {
  private nextRule: Rule | null;

  constructor() {
    this.nextRule = null;
  }

  public setNext(nextRule: Rule): Rule {
    this.nextRule = nextRule;
    return nextRule;
  }

  protected abstract canApply(age: number): boolean;

  public apply(age: number): Rule | null {
    if (this.canApply(age)) {
      console.log(`applied ${this.constructor.name}`);
      return;
    }
    if (this.nextRule) {
      return this.nextRule.apply(age);
    }
    console.log("no rule applied");
    return null;
  }
}
