import { TreeNode } from "./TreeNode";

// 前序遍历（迭代法）
function preorderTraversal(root: TreeNode | null): number[] {
  let helperStack: (TreeNode | null)[] = [];
  let res: number[] = [];
  let curNode: TreeNode | null;
  if (root === null) return res;
  helperStack.push(root);
  while (helperStack.length > 0) {
    curNode = helperStack.pop()!;
    if (curNode !== null) {
      if (curNode.right !== null) helperStack.push(curNode.right);
      if (curNode.left !== null) helperStack.push(curNode.left);
      helperStack.push(curNode);
      helperStack.push(null);
    } else {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
    }
  }
  return res;
}

// 中序遍历（迭代法）
function inorderTraversal(root: TreeNode | null): number[] {
  let helperStack: (TreeNode | null)[] = [];
  let res: number[] = [];
  let curNode: TreeNode | null;
  if (root === null) return res;
  helperStack.push(root);
  while (helperStack.length > 0) {
    curNode = helperStack.pop()!;
    if (curNode !== null) {
      if (curNode.right !== null) helperStack.push(curNode.right);
      helperStack.push(curNode);
      helperStack.push(null);
      if (curNode.left !== null) helperStack.push(curNode.left);
    } else {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
    }
  }
  return res;
}

// 后序遍历（迭代法）
function postorderTraversal(root: TreeNode | null): number[] {
  let helperStack: (TreeNode | null)[] = [];
  let res: number[] = [];
  let curNode: TreeNode | null;
  if (root === null) return res;
  helperStack.push(root);
  while (helperStack.length > 0) {
    curNode = helperStack.pop()!;
    if (curNode !== null) {
      helperStack.push(curNode);
      helperStack.push(null);
      if (curNode.right !== null) helperStack.push(curNode.right);
      if (curNode.left !== null) helperStack.push(curNode.left);
    } else {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
    }
  }
  return res;
}
