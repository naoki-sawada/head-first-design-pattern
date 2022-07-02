import { SimpleVacationBuilder } from "./builder/SimpleVacationBuilder";
import { SpecialVacationBuilder } from "./builder/SpecialVacationBuilder";
import Hotel from "./model/Hotel";
import { SimpleVacation } from "./model/SimpleVacation";
import SpecialEvent from "./model/SpecialEvent";
import { SpecialVacation } from "./model/SpecialVacation";

export function simplePlanner(): SimpleVacation {
  const builder = new SimpleVacationBuilder();
  builder.buildDays(3);
  builder.addHotel(new Hotel("Business", 3.1, 100));
  builder.addHotel(new Hotel("Business", 3.1, 100));
  return builder.getVacation();
}

export function birthdayPlanner(): SpecialVacation {
  const builder = new SpecialVacationBuilder();
  builder.buildDays(2);
  builder.addHotel(new Hotel("Imperial", 4.2, 200));
  builder.addSpecialEvent(new SpecialEvent("Birthday event", 300));
  return builder.getVacation();
}
