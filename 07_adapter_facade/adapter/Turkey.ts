export interface Turkey {
  gobble(): void;
  fly(): void;
}

export class WildTurkey implements Turkey {
  gobble(): void {
    console.log("gobble");
  }

  fly(): void {
    console.log("the turkey is flying very short distance");
  }
}
