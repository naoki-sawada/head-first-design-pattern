import { GumballMachine } from "./GumballMachine";
import { GumballMonitor } from "./GumballMonitor";

const machine = new GumballMachine("Seattle", 5);
const monitor = new GumballMonitor(machine);

monitor.report();
