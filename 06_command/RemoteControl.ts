import { Command, NoCommand } from "./Command";

export class RemoteControl {
  private onCommands: Command[];
  private offCommands: Command[];
  private undoCommand: Command;

  constructor() {
    this.onCommands = [];
    this.offCommands = [];
    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
    this.undoCommand = noCommand;
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
    const command = this.onCommands[index];
    command.execute();
    this.undoCommand = command;
  }

  public offButtonWasPushed(index: number): void {
    const command = this.offCommands[index];
    command.execute();
    this.undoCommand = command;
  }

  public undoButtonWasPushed(): void {
    this.undoCommand.undo();
  }
}
