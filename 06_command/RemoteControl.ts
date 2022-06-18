import { Command, NoCommand } from "./Command";

export class RemoteControl {
  private onCommands: Command[];
  private offCommands: Command[];

  constructor() {
    this.onCommands = [];
    this.offCommands = [];
    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
  }

  public setCommand(
    index: number,
    onCommand: Command,
    offCommand: Command
  ): void {
    this.onCommands[index] = onCommand;
    this.offCommands[index] = offCommand;
  }

  public onButtonWasPushed(index: number): void {
    this.onCommands[index].execute();
  }

  public offButtonWasPushed(index: number): void {
    this.offCommands[index].execute();
  }
}
