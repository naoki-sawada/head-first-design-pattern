import { StreamingPlayer } from "./StreamingPlayer";

export interface Amplifier {
  on(): void;
  setStreamingPlayer(player: StreamingPlayer);
  setSurroundSound(): void;
  setVolume(volume: number);
  off(): void;
}
