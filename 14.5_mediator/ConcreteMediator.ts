import { send } from "process";
import { Alarm } from "./Alarm";
import { CoffeePot } from "./CoffeePot";
import { Component } from "./Component";
import { Mediator } from "./Mediator";
import { Sprinkler } from "./Sprinkler";

export class ConcreteMediator implements Mediator {
  private alarm: Alarm;
  private coffeePot: CoffeePot;
  private sprinkler: Sprinkler;

  constructor() {
    this.alarm = new Alarm(this);
    this.coffeePot = new CoffeePot(this);
    this.sprinkler = new Sprinkler(this);
  }

  public notify(sender: Component, event: string): void {
    if (sender instanceof Alarm) {
      switch (event) {
        case "start":
          console.log("Alarm started");
          return;
        case "reset":
          console.log("Alarm reset");
          return;
        case "stop":
          console.log("Alarm stopped");
          this.coffeePot.brew();
          this.sprinkler.start();
          return;
        default:
          return;
      }
    }
    if (sender instanceof CoffeePot) {
      switch (event) {
        case "brew":
          console.log("CoffeePot brewed");
          return;
        case "done":
          console.log("CoffeePot done");
          return;
        default:
          return;
      }
    }
    if (sender instanceof Sprinkler) {
      switch (event) {
        case "start":
          console.log("Sprinkler started");
          return;
        case "stop":
          console.log("Sprinkler stopped");
          return;
        default:
          return;
      }
    }
  }

  public start(): void {
    this.alarm.setTime(1000);
  }
}
