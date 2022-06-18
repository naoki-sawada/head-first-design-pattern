export class Singleton {
  private static instance: Singleton;

  private constructor() {
    console.log("created singleton");
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton;
  }
}
