import { Command } from "./Command";

export class SimpleRemoteControl {
  private slot: Command;

  constructor(slot: Command) {
    this.slot = slot;
  }

  public setCommand(command: Command): void {
    this.slot = command;
  }

  public buttonWasPressed(): void {
    this.slot.execute();
  }
}
