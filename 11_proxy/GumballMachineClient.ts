export class GumballMachineClient {
  private uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  public async getCount(): Promise<number> {
    const res = await fetch(`${this.uri}/count`).catch((e) => {
      throw e;
    });
    const { count } = await res.json().catch((e) => {
      throw e;
    });
    if (typeof count !== "number") {
      throw new Error("Invalid response");
    }
    return count;
  }

  public async getLocation(): Promise<string> {
    const res = await fetch(`${this.uri}/location`).catch((e) => {
      throw e;
    });
    const { location } = await res.json().catch((e) => {
      throw e;
    });
    if (typeof location !== "string") {
      throw new Error("Invalid response");
    }
    return location;
  }

  public async getStateName(): Promise<string> {
    const res = await fetch(`${this.uri}/state`).catch((e) => {
      throw e;
    });
    const { state } = await res.json().catch((e) => {
      throw e;
    });
    if (typeof state !== "string") {
      throw new Error("Invalid response");
    }
    return state;
  }
}
