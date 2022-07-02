export default class Hotel {
  private name: string;
  private stars: number;
  private price: number;

  constructor(name: string, stars: number, price: number) {
    this.name = name;
    this.stars = stars;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public getStars(): number {
    return this.stars;
  }

  public getPrice(): number {
    return this.price;
  }
}
