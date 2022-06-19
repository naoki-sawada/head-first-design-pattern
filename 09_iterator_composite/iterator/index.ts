import { DinerMenu } from "./DinerMenu";
import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { Waitperson } from "./Waitperson";

const pancakeMenu = new PancakeHouseMenu();
const dinerMenu = new DinerMenu();

const waitperson = new Waitperson(pancakeMenu, dinerMenu);
waitperson.printMenuAll();
