import {
  LightOffCommand,
  LightOnCommand,
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
  }
}

simple();
multi();
