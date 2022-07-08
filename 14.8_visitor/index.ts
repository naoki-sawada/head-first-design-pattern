import { Ingredient } from "./Ingredient";
import { PrintVisitor } from "./PrintVisitor";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

const printVisitor = new PrintVisitor();

const menu = new Menu("Dinner Menu");
menu.accept(printVisitor);

const pizza = new MenuItem("Pizza", "Pizza with cheese", 10.99);
pizza.accept(printVisitor);

const cheese = new Ingredient("Cheese", 4, 402, 25, 1.3);
cheese.accept(printVisitor);
const tomato = new Ingredient("Tomato", 5, 18, 0.2, 3.9);
tomato.accept(printVisitor);

pizza.add(cheese);
pizza.add(tomato);
menu.add(pizza);
