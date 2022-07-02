import Hotel from "../model/Hotel";

export interface VacationBuilder {
  buildDays(days: number): void;
  addHotel(hotel: Hotel): void;
}
