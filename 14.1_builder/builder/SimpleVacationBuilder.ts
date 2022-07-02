import Hotel from "../model/Hotel";
import { SimpleVacation } from "../model/SimpleVacation";
import { VacationBuilder } from "./VacationBuilder";

export class SimpleVacationBuilder implements VacationBuilder {
  private vacation: SimpleVacation;

  constructor() {
    this.vacation = new SimpleVacation();
  }

  public buildDays(days: number): void {
    this.vacation.addDays(days);
  }

  public addHotel(hotel: Hotel): void {
    this.vacation.addHotel(hotel);
  }

  public getVacation(): SimpleVacation {
    return this.vacation;
  }
}
