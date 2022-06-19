import { CafeMenu } from "./CafeMenu";
import { DinerMenu } from "./DinerMenu";
import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { Waitperson } from "./Waitperson";

const pancakeMenu = new PancakeHouseMenu();
const cafeMenu = new CafeMenu();
const dinerMenu = new DinerMenu();

const waitperson = new Waitperson([pancakeMenu, cafeMenu, dinerMenu]);
waitperson.printMenuAll();
