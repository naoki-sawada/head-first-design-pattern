import { GumballMachine } from "./GumballMachine";

const gumballMachine = new GumballMachine(5);
gumballMachine.insertQuarter();
gumballMachine.turnCrank(); // 4

gumballMachine.insertQuarter();
gumballMachine.ejectQuarter();
gumballMachine.turnCrank();

gumballMachine.insertQuarter();
gumballMachine.turnCrank(); // 3
gumballMachine.insertQuarter();
gumballMachine.turnCrank(); // 2
gumballMachine.ejectQuarter();

gumballMachine.insertQuarter();
gumballMachine.insertQuarter();
gumballMachine.turnCrank(); // 1
gumballMachine.insertQuarter();
gumballMachine.turnCrank(); // 0
gumballMachine.insertQuarter();
gumballMachine.turnCrank(); // sold out
