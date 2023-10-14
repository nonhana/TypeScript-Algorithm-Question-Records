/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 */
import { TreeNode } from "./TreeNode";

// 递归法
function isSymmetric(root: TreeNode | null): boolean {
  function recur(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;
    let isSym1: boolean = recur(node1.left, node2.right);
    let isSym2: boolean = recur(node1.right, node2.left);
    return isSym1 && isSym2;
  }
  if (root === null) return true;
  return recur(root.left, root.right);
}
