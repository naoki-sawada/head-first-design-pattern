import Hotel from "../model/Hotel";
import SpecialEvent from "../model/SpecialEvent";
import { SpecialVacation } from "../model/SpecialVacation";
import { VacationBuilder } from "./VacationBuilder";

export class SpecialVacationBuilder implements VacationBuilder {
  private vacation: SpecialVacation;

  constructor() {
    this.vacation = new SpecialVacation();
  }

  public buildDays(days: number): void {
    this.vacation.addDays(days);
  }

  public addHotel(hotel: Hotel): void {
    this.vacation.addHotel(hotel);
  }

  public addSpecialEvent(specialEvent: SpecialEvent): void {
    this.vacation.addSpecialEvent(specialEvent);
  }

  public getVacation(): SpecialVacation {
    return this.vacation;
  }
}
