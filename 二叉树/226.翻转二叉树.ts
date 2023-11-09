/**
 * 翻转一棵二叉树。
 */
import { TreeNode } from "./TreeNode";

// 递归法（前序遍历）：中左右
function invertTree1(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  // 遍历到中节点的时候进行交换
  [root.left, root.right] = [root.right, root.left]; // 中
  invertTree1(root.left); // 左
  invertTree1(root.right); // 右
  return root;
}

// 递归法（后序遍历）：左右中
function invertTree2(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  invertTree2(root.left);
  invertTree2(root.right);
  [root.left, root.right] = [root.right, root.left]; // 中
  return root;
}

// 递归法（中序遍历）
function invertTree3(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  invertTree3(root.left);
  let tempNode: TreeNode | null = root.left;
  root.left = root.right;
  root.right = tempNode;
  // 因为左右节点已经进行交换，此时的root.left 是原先的root.right
  invertTree3(root.left);
  return root;
}
