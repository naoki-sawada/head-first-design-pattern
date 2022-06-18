import { MallardDuck, ModelDuck } from "./Duck";

function duck() {
  const duck = new MallardDuck();
  duck.performFly();
  duck.performQuack();
  duck.swim();
}

function modelDuck() {
  const duck = new ModelDuck();
  duck.performFly();
  duck.performQuack();
}

function main() {
  duck();
  modelDuck();
}

main();
