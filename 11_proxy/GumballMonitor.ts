import { GumballMachineClient } from "./GumballMachineClient";

export class GumballMonitor {
  private gumballMachine: GumballMachineClient;

  constructor(gumballMachine: GumballMachineClient) {
    this.gumballMachine = gumballMachine;
  }

  public async report(): Promise<void> {
    try {
      const location = await this.gumballMachine.getLocation();
      console.log(`Gumball Machine: ${location}`);
    } catch (e) {
      throw e;
    }

    try {
      const count = await this.gumballMachine.getCount();
      console.log(`Current inventory: ${count} gumballs`);
    } catch (e) {
      throw e;
    }

    try {
      const state = await this.gumballMachine.getStateName();
      console.log(`Current machine state: ${state}`);
    } catch (e) {
      throw e;
    }
  }
}
