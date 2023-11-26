/* 
  给你一棵所有节点为非负值的二叉搜索树，
  请你计算树中任意两节点的差的绝对值的最小值。
*/
import { TreeNode } from "./TreeNode";

// 递归法
function getMinimumDifference(root: TreeNode | null): number {
  let helperArr: number[] = [];
  function recur(root: TreeNode | null): void {
    if (root === null) return;
    recur(root.left);
    helperArr.push(root.val);
    recur(root.right);
  }
  recur(root);
  let resMin: number = Infinity;
  for (let i = 0, length = helperArr.length; i < length - 1; i++) {
    resMin = Math.min(resMin, helperArr[i + 1] - helperArr[i]);
  }
  return resMin;
}
