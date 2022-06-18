export abstract class CaffeineBeverageWithHook {
  constructor() {}

  public async prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    const answer = await this.customerWantsCondiments();
    if (answer) {
      this.addCondiments();
    }
  }

  protected abstract brew(): void;
  protected abstract addCondiments(): void;

  private boilWater(): void {
    console.log("boil water");
  }

  private pourInCup(): void {
    console.log("pour into a cup");
  }

  protected async customerWantsCondiments(): Promise<boolean> {
    return true;
  }
}
