import Hotel from "./Hotel";

export class SimpleVacation {
  private days: number;
  private hotels: Hotel[];

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

  public addDays(days: number): void {
    this.days = days;
  }

  public addHotel(hotel: Hotel): void {
    this.hotels.push(hotel);
  }
}
