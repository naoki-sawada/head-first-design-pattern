import { GumballMachineClient } from "./GumballMachineClient";
import { GumballMonitor } from "./GumballMonitor";

const machine = new GumballMachineClient("http://localhost:3000");
const monitor = new GumballMonitor(machine);

try {
  monitor.report();
} catch (e) {
  console.error(e);
}
