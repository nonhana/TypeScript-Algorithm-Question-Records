import { TreeNode } from "./TreeNode";

// 前序遍历
function preorderTraversal(node: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]): void {
    if (node === null) return;
    res.push(node.val);
    traverse(node.left, res);
    traverse(node.right, res);
  }
  const res: number[] = [];
  traverse(node, res);
  return res;
}

// 中序遍历
function inorderTraversal(node: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]): void {
    if (node === null) return;
    traverse(node.left, res);
    res.push(node.val);
    traverse(node.right, res);
  }
  const res: number[] = [];
  traverse(node, res);
  return res;
}

// 后序遍历
function postorderTraversal(node: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]): void {
    if (node === null) return;
    traverse(node.left, res);
    traverse(node.right, res);
    res.push(node.val);
  }
  const res: number[] = [];
  traverse(node, res);
  return res;
}
