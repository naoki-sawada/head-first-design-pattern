import { Duck } from "./Duck";
import { WildTurkey } from "./Turkey";
import { TurkeyAdapter } from "./TurkeyAdapter";

function testDuck(duck: Duck) {
  duck.quack();
  duck.fly();
}

const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

testDuck(turkeyAdapter);
