import Hotel from "./Hotel";
import SpecialEvent from "./SpecialEvent";

export class SpecialVacation {
  private days: number;
  private hotels: Hotel[];
  private specialEvent: SpecialEvent;

  constructor() {
    this.days = 0;
    this.hotels = [];
  }

  public getDays(): number {
    return this.days;
  }

  public getHotels(): Hotel[] {
    return this.hotels;
  }

  public getSpecialEvent(): SpecialEvent {
    return this.specialEvent;
  }

  public addDays(days: number): void {
    this.days = days;
  }

  public addHotel(hotel: Hotel): void {
    this.hotels.push(hotel);
  }

  public addSpecialEvent(specialEvent: SpecialEvent): void {
    this.specialEvent = specialEvent;
  }
}
