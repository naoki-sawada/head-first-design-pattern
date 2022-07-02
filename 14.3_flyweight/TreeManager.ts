import { Tree } from "./Tree";

export class Manager {
  private trees: Tree[] = [];

  private constructor() {}

  public getTree(x: number, y: number): Tree {
    const tree = this.trees.find((t) => t.x === x && t.y === y);
    if (tree) {
      return tree;
    }
    const newTree = new Tree(x, y);
    this.trees.push(newTree);
    return newTree;
  }
}
