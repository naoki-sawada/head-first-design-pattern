export class Tree {
  public readonly x: number;
  public readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public display(): void {
    // very complicate logic to display tree
    // ....
    //
    console.log(`Tree at (${this.x}, ${this.y})`);
  }
}
