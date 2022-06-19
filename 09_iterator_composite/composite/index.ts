import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Waitperson } from "./Waitperson";

const dinnerMenu = new Menu("Dinner menu", "18:00 ~ 22:00");
dinnerMenu.add(
  new MenuItem(
    "Vegetarian BLT",
    "Whole wheat bread sandwich with lettuce, tomato and (fake) bacon",
    true,
    2.99
  )
);
dinnerMenu.add(
  new MenuItem(
    "BLT",
    "Whole wheat bread sandwich with lettuce, tomato and bacon",
    false,
    2.99
  )
);
dinnerMenu.add(
  new MenuItem("today's soup", "today's soup with potato salad", true, 3.29)
);
dinnerMenu.add(
  new MenuItem(
    "Hotdog",
    "Hot dog with sauerkraut, relish, onions and cheese",
    false,
    3.05
  )
);

const dessertMenu = new Menu("Dessert menu", "All days");
dessertMenu.add(
  new MenuItem("Custard pudding", "Slightly bitter custard pudding", false, 3.0)
);

const allMenus = new Menu("Grand menu", "Spring menu 2022");
allMenus.add(dinnerMenu);
allMenus.add(dessertMenu);

const waitPerson = new Waitperson(allMenus);
waitPerson.printMenu();
