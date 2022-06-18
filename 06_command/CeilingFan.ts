export class CeilingFan {
  private readonly name: string;
  static readonly HIGH = 3;
  static readonly MEDIUM = 2;
  static readonly LOW = 1;
  static readonly OFF = 0;
  private speed: number;

  constructor(name: string) {
    this.name = name;
    this.speed = CeilingFan.OFF;
  }

  public high(): void {
    this.speed = CeilingFan.HIGH;
    console.log("high");
  }

  public medium(): void {
    this.speed = CeilingFan.MEDIUM;
    console.log("medium");
  }

  public low(): void {
    this.speed = CeilingFan.LOW;
    console.log("low");
  }

  public off(): void {
    this.speed = CeilingFan.OFF;
    console.log("off");
  }

  public getSpeed(): number {
    return this.speed;
  }

  public toString(): string {
    return this.name;
  }
}
