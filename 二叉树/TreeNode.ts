export class TreeNode {
  public val: number; // 节点值
  public left: TreeNode | null; // 左子树
  public right: TreeNode | null; // 右子树
  constructor(val?: number, left?: TreeNode, right?: TreeNode) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
