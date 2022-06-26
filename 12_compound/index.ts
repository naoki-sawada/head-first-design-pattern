import { DuckFactory } from "./DuckFactory";
import { DuckSimulator } from "./DuckSimulator";
import { Flock } from "./Flock";
import { Goose } from "./Goose";
import { GooseAdapter } from "./GooseAdapter";
import { QuackableCounter } from "./QuackableCounter";
import { Quacklogist } from "./Quacklogist";

const duckFactory = new DuckFactory();

const flockOfDucks = new Flock();
const redhead = duckFactory.createRedheadDuck();
const duckCall = duckFactory.createDuckCall();
const rubberDuck = duckFactory.createRubberDuck();
const goose = new GooseAdapter(new Goose());
flockOfDucks.add(redhead);
flockOfDucks.add(duckCall);
flockOfDucks.add(rubberDuck);
flockOfDucks.add(goose);

const flockOfMallards = new Flock();
const mallardOne = duckFactory.createMallardDuck();
const mallardTwo = duckFactory.createMallardDuck();
const mallardThree = duckFactory.createMallardDuck();
const mallardFour = duckFactory.createMallardDuck();
flockOfMallards.add(mallardOne);
flockOfMallards.add(mallardTwo);
flockOfMallards.add(mallardThree);
flockOfMallards.add(mallardFour);

flockOfDucks.add(flockOfMallards);

const quacklogist = new Quacklogist();
flockOfDucks.registerObserver(quacklogist);

const sim = new DuckSimulator();
console.log("Duck Simulator with Composite Flock");
sim.simulate(flockOfDucks);
// console.log("Duck Simulator with Mallard Flock");
// sim.simulate(flockOfMallards);

console.log(`The ducks quacked ${QuackableCounter.getNumberOfQuacks()} times`);
