export interface FlyBehavior {
  fly(): void;
}

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("flying!");
  }
}

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("can not fly");
  }
}
