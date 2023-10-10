/**
 * 给你一个二叉树，请你返回其按层序遍历得到的节点值。 （即逐层地，从左到右访问所有节点）。
 */

import { TreeNode } from "./TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
  let helperQueue: TreeNode[] = [];
  let res: number[][] = [];
  let tempArr: number[] = [];
  if (root !== null) helperQueue.push(root);
  let curNode: TreeNode;
  while (helperQueue.length > 0) {
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      curNode = helperQueue.shift()!;
      tempArr.push(curNode.val);
      if (curNode.left !== null) {
        helperQueue.push(curNode.left);
      }
      if (curNode.right !== null) {
        helperQueue.push(curNode.right);
      }
    }
    res.push(tempArr);
    tempArr = [];
  }
  return res;
}
