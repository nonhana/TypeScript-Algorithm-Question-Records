import { TreeNode } from "./TreeNode";

function preorderTraversal(node: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]): void {
    if (node === null) return;
    res.push(node.val);
    traverse(node.left, res);
    traverse(node.right, res);
  }
  let res = [];
  traverse(node, res);
  return res;
}

function levelorderTraversal(node: TreeNode | null): number[][] {
  let helperQueue: TreeNode[] = [];
  let tempArr: number[] = [];
  let currentNode: TreeNode;
  let res: number[][] = []; // 结果

  if (node !== null) helperQueue.push(node);

  while (helperQueue.length > 0) {
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      currentNode = helperQueue.shift()!;
      tempArr.push(currentNode.val);
      if (currentNode.left) {
        helperQueue.push(currentNode.left);
      }
      if (currentNode.right) {
        helperQueue.push(currentNode.right);
      }
    }
    res.push(tempArr);
    tempArr = [];
  }
  return res;
}

function flipTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  [root.left, root.right] = [root.right, root.left];
  flipTree(root.left);
  flipTree(root.right);
  return root;
}
