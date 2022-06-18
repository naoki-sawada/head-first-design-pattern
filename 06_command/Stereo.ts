export class Stereo {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  public on(): void {
    console.log("stereo on");
  }

  public off(): void {
    console.log("stereo off");
  }

  public setCD(): void {
    console.log("CD was set");
  }

  public setDVD(): void {
    console.log("DVD was set");
  }

  public setRadio(): void {
    console.log("radio was set");
  }

  public setVolume(volume: number): void {
    if (volume < 0) {
      throw new Error("volume should be greater than 0");
    }
    if (volume > 100) {
      throw new Error("volume should be less than 100");
    }
    console.log(`now volume: ${volume}`);
  }

  public toString(): string {
    return this.name;
  }
}
