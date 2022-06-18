import { Light } from "./Light";
import { Stereo } from "./Stereo";
import { CeilingFan } from "./CeilingFan";

export interface Command {
  execute(): void;
  undo(): void;
}

export class LightOnCommand implements Command {
  private readonly light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}

export class LightOffCommand implements Command {
  private readonly light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}

export class StereoOnWithDCCommand implements Command {
  private readonly stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }

  undo(): void {
    this.stereo.off();
    this.stereo.setVolume(0);
  }
}

export class StereoOffWithDCCommand implements Command {
  private readonly stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.off();
    this.stereo.setVolume(0);
  }

  undo(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }
}

abstract class SeelingFanCommandBase implements Command {
  protected readonly fan: CeilingFan;
  protected prevState: number;

  constructor(fan: CeilingFan) {
    this.fan = fan;
    this.prevState = CeilingFan.OFF;
  }

  abstract postExecute(): void;

  public execute(): void {
    this.prevState = this.fan.getSpeed();
    this.postExecute();
  }

  undo(): void {
    switch (this.prevState) {
      case CeilingFan.HIGH:
        this.fan.high();
        return;
      case CeilingFan.MEDIUM:
        this.fan.medium();
        return;
      case CeilingFan.LOW:
        this.fan.low();
        return;
      case CeilingFan.OFF:
        this.fan.off();
        return;
      default:
        break;
    }
  }
}

export class SeelingFanHighCommand extends SeelingFanCommandBase {
  constructor(fan: CeilingFan) {
    super(fan);
  }

  postExecute(): void {
    this.fan.high();
  }
}

export class SeelingFanMediumCommand extends SeelingFanCommandBase {
  constructor(fan: CeilingFan) {
    super(fan);
  }

  postExecute(): void {
    this.fan.medium();
  }
}

export class SeelingFanLowCommand extends SeelingFanCommandBase {
  constructor(fan: CeilingFan) {
    super(fan);
  }

  postExecute(): void {
    this.fan.low();
  }
}

export class SeelingFanOffCommand extends SeelingFanCommandBase {
  constructor(fan: CeilingFan) {
    super(fan);
  }

  postExecute(): void {
    this.fan.off();
  }
}

export class NoCommand implements Command {
  constructor() {}

  execute(): void {
    // do nothing.
  }

  undo(): void {
    // do nothing.
  }
}
