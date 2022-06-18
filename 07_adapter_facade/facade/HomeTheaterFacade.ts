import { Amplifier } from "./system/Amplifier";
import { PopcornPopper } from "./system/PopcornPopper";
import { Projector } from "./system/Projector";
import { StreamingPlayer } from "./system/StreamingPlayer";
import { TheaterLights } from "./system/TheaterLights";
import { Tuner } from "./system/Tuner";
import { Screen } from "./system/Screen";

export class HomeTheaterFacade {
  private readonly amp: Amplifier;
  private readonly tuner: Tuner;
  private readonly player: StreamingPlayer;
  private readonly projector: Projector;
  private readonly lights: TheaterLights;
  private readonly screen: Screen;
  private readonly popper: PopcornPopper;

  constructor(
    amp: Amplifier,
    tuner: Tuner,
    player: StreamingPlayer,
    projector: Projector,
    lights: TheaterLights,
    screen: Screen,
    popper: PopcornPopper
  ) {
    this.amp = amp;
    this.tuner = tuner;
    this.player = player;
    this.projector = projector;
    this.lights = lights;
    this.screen = screen;
    this.popper = popper;
  }

  public watchMovie(movie: string): void {
    console.log("prepare to watch the movie");
    this.popper.on();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setStreamingPlayer(this.player);
    this.amp.setSurroundSound;
    this.amp.setVolume(5);
    this.player.on();
    this.player.play(movie);
  }

  public endMovie(): void {
    console.log("stop the movie");
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.player.stop();
    this.player.off();
  }
}
