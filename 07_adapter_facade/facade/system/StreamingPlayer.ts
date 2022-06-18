export interface StreamingPlayer {
  on(): void;
  play(title: string): void;
  stop(): void;
  off(): void;
}
