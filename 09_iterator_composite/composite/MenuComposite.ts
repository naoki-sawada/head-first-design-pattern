export abstract class MenuComposite {
  constructor() {}

  public add(menuComposite: MenuComposite): void {
    throw new Error("unsupported operation");
  }

  public getChild(index: number): MenuComposite {
    throw new Error("unsupported operation");
  }

  public print(): void {
    throw new Error("unsupported operation");
  }
}
