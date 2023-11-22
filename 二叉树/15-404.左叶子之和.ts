/* 
  计算给定二叉树的所有左叶子之和。
*/
import { TreeNode } from "./TreeNode";

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root === null) return 0;

  let midVal: number = 0;

  if (
    root.left !== null &&
    root.left.left === null &&
    root.left.right === null
  ) {
    midVal = root.left.val; // 如果左节点是叶子节点，就把值加到结果中
  }

  let leftVal: number = sumOfLeftLeaves(root.left);
  let rightVal: number = sumOfLeftLeaves(root.right);

  return midVal + leftVal + rightVal;
}
