import { GameMemento } from "./GameMemento";

export class MasterGameObject {
  private gameState: GameMemento;

  constructor() {
    this.gameState = { savedGameState: {} };
  }

  public getCurrentState(): GameMemento {
    return { ...this.gameState };
  }

  public restoreState(gameState: GameMemento) {
    this.gameState = gameState;
  }

  public action(actionType: string) {
    this.gameState.savedGameState = { action: actionType };
  }
}
