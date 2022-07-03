import { WellKnownMonster } from "./WellKnownMonster";

const monster1 = new WellKnownMonster();
monster1.name = "Goblin";
monster1.size = 10;
monster1.speed = 5;
console.log(monster1);

const monster2 = monster1.clone();
monster2.name = "Orc";
monster2.size = 20;
monster2.speed = 10;
console.log(monster2);
