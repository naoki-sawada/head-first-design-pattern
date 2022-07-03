import { Monster } from "./Monster";

export class WellKnownMonster implements Monster {
  public name: string;
  public size: number;
  public speed: number;

  public clone(): Monster {
    const clone = Object.create(this);
    return clone;
  }
}
