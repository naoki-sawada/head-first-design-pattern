export abstract class CaffeineBeverage {
  constructor() {}

  public prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  protected abstract brew(): void;
  protected abstract addCondiments(): void;

  private boilWater(): void {
    console.log("boil water");
  }

  private pourInCup(): void {
    console.log("pour into a cup");
  }
}
