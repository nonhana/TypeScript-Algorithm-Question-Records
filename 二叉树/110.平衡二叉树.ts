/* 
  给定一个二叉树，判断它是否是高度平衡的二叉树。
  本题中，一棵高度平衡二叉树定义为：
  一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
*/
import { TreeNode } from "./TreeNode";

// 递归法
function isBalanced(root: TreeNode | null): boolean {
  function getDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    let leftDepth: number = getDepth(root.left);
    if (leftDepth === -1) return -1;
    let rightDepth: number = getDepth(root.right);
    if (rightDepth === -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;
    return 1 + Math.max(leftDepth, rightDepth);
  }
  return getDepth(root) !== -1;
}
