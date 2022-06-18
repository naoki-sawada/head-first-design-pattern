export class Light {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  public on(): void {
    console.log("light on");
  }

  public off(): void {
    console.log("light off");
  }

  public toString(): string {
    return this.name;
  }
}
