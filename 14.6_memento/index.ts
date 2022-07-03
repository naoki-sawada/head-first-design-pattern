import { MasterGameObject } from "./MasterGameObject";

const mgo = new MasterGameObject();
mgo.action("move");
const moved = mgo.getCurrentState();
console.log(moved);

mgo.action("attack");
const attack = mgo.getCurrentState();
console.log(attack);

// rollback move state
mgo.restoreState(moved);
const restored = mgo.getCurrentState();
console.log(restored);
