/* 
  给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，
  这条路径上所有节点值相加等于目标和。
  说明: 叶子节点是指没有子节点的节点。
*/
import { TreeNode } from "./TreeNode";

// 递归法
function hasPathSum1(root: TreeNode | null, targetSum: number): boolean {
  function recur(node: TreeNode, sum: number): boolean {
    console.log(sum);
    if (node.left === null && node.right === null && sum === 0) return true;
    if (node.left !== null) {
      sum -= node.left.val;
      if (recur(node.left, sum) === true) return true;
      sum += node.left.val;
    }
    if (node.right !== null) {
      sum -= node.right.val;
      if (recur(node.right, sum) === true) return true;
      sum += node.right.val;
    }
    return false;
  }
  if (root === null) return false;
  return recur(root, targetSum - root.val);
}

// 递归法(精简版)
function hasPathSum2(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;
  targetSum -= root.val;
  if (root.left === null && root.right === null && targetSum === 0) return true;
  return (
    hasPathSum2(root.left, targetSum) || hasPathSum2(root.right, targetSum)
  );
}
