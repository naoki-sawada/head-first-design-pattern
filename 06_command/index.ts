import { CeilingFan } from "./CeilingFan";
import {
  LightOffCommand,
  LightOnCommand,
  MacroCommand,
  SeelingFanHighCommand,
  SeelingFanLowCommand,
  SeelingFanMediumCommand,
  SeelingFanOffCommand,
  StereoOffWithDCCommand,
  StereoOnWithDCCommand,
} from "./Command";
import { Light } from "./Light";
import { RemoteControl } from "./RemoteControl";
import { SimpleRemoteControl } from "./SimpleRemoteControl";
import { Stereo } from "./Stereo";

function simple(): void {
  const light = new Light("living room");
  const lightCommand = new LightOnCommand(light);
  const simpleRemote = new SimpleRemoteControl(lightCommand);
  simpleRemote.buttonWasPressed();
}

function multi(): void {
  const livingRoomLight = new Light("living room");
  const kitchenRoomLight = new Light("kitchen room");
  const stereo = new Stereo("living room stereo");

  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);
  const kitchenRoomLightOn = new LightOnCommand(kitchenRoomLight);
  const kitchenRoomLightOff = new LightOffCommand(kitchenRoomLight);
  const stereoOnCommand = new StereoOnWithDCCommand(stereo);
  const stereoOffCommand = new StereoOffWithDCCommand(stereo);

  const remote = new RemoteControl();
  remote.setCommand(0, livingRoomLightOn, livingRoomLightOff);
  remote.setCommand(1, kitchenRoomLightOn, kitchenRoomLightOff);
  remote.setCommand(2, stereoOnCommand, stereoOffCommand);

  for (let i = 0; i < 3; i++) {
    remote.onButtonWasPushed(i);
    remote.offButtonWasPushed(i);
    remote.undoButtonWasPushed();
  }
}

function fan(): void {
  const ceilingFan = new CeilingFan("ceiling fan");

  const ceilingFanHighCommand = new SeelingFanHighCommand(ceilingFan);
  const ceilingFanMediumCommand = new SeelingFanMediumCommand(ceilingFan);
  const ceilingFanLowCommand = new SeelingFanLowCommand(ceilingFan);
  const ceilingFanOffCommand = new SeelingFanOffCommand(ceilingFan);

  const remote = new RemoteControl();
  remote.setCommand(0, ceilingFanHighCommand, ceilingFanOffCommand);
  remote.setCommand(1, ceilingFanMediumCommand, ceilingFanOffCommand);
  remote.setCommand(2, ceilingFanLowCommand, ceilingFanOffCommand);

  remote.onButtonWasPushed(0);
  remote.offButtonWasPushed(0);
  remote.undoButtonWasPushed();

  remote.onButtonWasPushed(1);
  remote.undoButtonWasPushed();
}

function party() {
  const livingRoomLight = new Light("living room");
  const kitchenRoomLight = new Light("kitchen room");
  const stereo = new Stereo("living room stereo");
  const ceilingFan = new CeilingFan("ceiling fan");

  const livingRoomLightOn = new LightOnCommand(livingRoomLight);
  const livingRoomLightOff = new LightOffCommand(livingRoomLight);
  const kitchenRoomLightOn = new LightOnCommand(kitchenRoomLight);
  const kitchenRoomLightOff = new LightOffCommand(kitchenRoomLight);
  const stereoOnCommand = new StereoOnWithDCCommand(stereo);
  const stereoOffCommand = new StereoOffWithDCCommand(stereo);
  const ceilingFanHighCommand = new SeelingFanHighCommand(ceilingFan);
  const ceilingFanOffCommand = new SeelingFanOffCommand(ceilingFan);

  const partyOn = [
    livingRoomLightOn,
    kitchenRoomLightOn,
    ceilingFanHighCommand,
    stereoOnCommand,
  ];
  const partyOff = [
    livingRoomLightOff,
    kitchenRoomLightOff,
    ceilingFanOffCommand,
    stereoOffCommand,
  ];
  const partyOnMacro = new MacroCommand(partyOn);
  const partyOffMacro = new MacroCommand(partyOff);

  const remote = new RemoteControl();
  remote.setCommand(0, partyOnMacro, partyOffMacro);

  remote.onButtonWasPushed(0);
  remote.offButtonWasPushed(0);
}

// simple();
// multi();
// fan();
party();
