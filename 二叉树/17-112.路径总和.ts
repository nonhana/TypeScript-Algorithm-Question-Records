/* 
  给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，
  这条路径上所有节点值相加等于目标和。
  说明: 叶子节点是指没有子节点的节点。
*/
import { TreeNode } from "./TreeNode";

// 递归法
function hasPathSum1(root: TreeNode | null, targetSum: number): boolean {
  // 递归函数：
  function recur(node: TreeNode, sum: number): boolean {
    if (node.left === null && node.right === null && sum === 0) return true; // 终止条件：该节点为叶子节点且sum为0

    if (node.left !== null) {
      sum -= node.left.val;
      if (recur(node.left, sum)) return true;
      sum += node.left.val;
    }

    if (node.right !== null) {
      sum -= node.right.val;
      if (recur(node.right, sum)) return true;
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

  targetSum -= root.val; // 默认减掉根节点，为了下面的左子树和右子树的分别判断作铺垫

  // 找到叶子节点并且路径和减为0，返回true
  if (root.left === null && root.right === null && targetSum === 0) return true;

  // 左子树或者右子树无论哪个找到路径都是可以的
  return (
    hasPathSum2(root.left, targetSum) || hasPathSum2(root.right, targetSum)
  );
}
