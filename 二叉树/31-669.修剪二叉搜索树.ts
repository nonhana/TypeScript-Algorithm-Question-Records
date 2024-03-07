/* 
  给定一个二叉搜索树，
  同时给定最小边界L 和最大边界 R。
  通过修剪二叉搜索树，
  使得所有节点的值在[L, R]中 (R>=L) 。
  你可能需要改变树的根节点，
  所以结果应当返回修剪好的二叉搜索树的新的根节点。
*/
import { TreeNode } from "./TreeNode";

// 递归法
function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (root === null) return null;
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
}
