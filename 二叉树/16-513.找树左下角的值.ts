/* 
  给定一个二叉树，在树的最后一行找到最左边的值。
*/
import { TreeNode } from "./TreeNode";

function findBottomLeftValue(root: TreeNode | null): number {
  function recur(root: TreeNode, depth: number): void {
    // 该节点为叶子节点
    if (root.left === null && root.right === null) {
      if (depth > maxDepth) {
        maxDepth = depth;
        resVal = root.val;
      }
      return;
    }
    if (root.left !== null) recur(root.left, depth + 1);
    if (root.right !== null) recur(root.right, depth + 1);
  }
  let maxDepth: number = 0;
  let resVal: number = 0; // 全局变量，用于记录最左边的值
  if (root === null) return resVal;
  recur(root, 1);
  return resVal;
}
