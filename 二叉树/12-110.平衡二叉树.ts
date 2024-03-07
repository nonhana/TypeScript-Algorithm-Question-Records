/* 
  给定一个二叉树，判断它是否是高度平衡的二叉树。
  本题中，一棵高度平衡二叉树定义为：
  一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
*/
import { TreeNode } from "./TreeNode";

// 递归法
function isBalanced(root: TreeNode | null): boolean {
  function getDepth(root: TreeNode | null): number {
    if (root === null) return 0; // 终止条件
    let leftDepth: number = getDepth(root.left); // 获取左子树深度
    if (leftDepth === -1) return -1; // 如果左子树本身就不是平衡的，直接返回-1
    let rightDepth: number = getDepth(root.right); // 获取右子树深度
    if (rightDepth === -1) return -1; // 如果右子树本身就不是平衡的，直接返回-1
    if (Math.abs(leftDepth - rightDepth) > 1) return -1; // 如果左右子树深度差大于1，直接返回-1
    return 1 + Math.max(leftDepth, rightDepth); // 返回的是最大深度
  }
  return getDepth(root) !== -1;
}
