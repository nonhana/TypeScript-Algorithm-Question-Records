import { TreeNode } from "./TreeNode";

// X序也就是中的遍历放在什么位置。
// 前序遍历 中->左->右
function preorderTraversal(node: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]): void {
    if (node === null) return;
    res.push(node.val); // 中
    traverse(node.left, res); // 左
    traverse(node.right, res); // 右
  }
  const res: number[] = [];
  traverse(node, res);
  return res;
}

// 中序遍历 左->中->右
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

// 后序遍历 左->右->中
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
