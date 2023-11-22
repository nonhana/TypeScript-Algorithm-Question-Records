import { TreeNode } from "./TreeNode";

function isBalanced(root: TreeNode | null): boolean {
  function getDepth(node: TreeNode | null): number {
    if (node === null) return 0;
    const leftDepth: number = getDepth(node.left);
    if (leftDepth === -1) return -1;
    const rightDepth: number = getDepth(node.right);
    if (rightDepth === -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;
    return 1 + Math.max(leftDepth, rightDepth);
  }
  return getDepth(root) !== -1;
}
