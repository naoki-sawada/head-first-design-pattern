import { Light } from "./Light";
import { Stereo } from "./Stereo";

export interface Command {
  execute(): void;
}

export class LightOnCommand implements Command {
  private readonly light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
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
}

export class NoCommand implements Command {
  constructor() {}

  execute(): void {
    // do nothing.
  }
}
