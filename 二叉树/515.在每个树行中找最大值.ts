/**
 * 您需要在二叉树的每一行中找到最大的值。
 */
import { TreeNode } from "./TreeNode";

function largestValues(root: TreeNode | null): number[] {
  let helperQueue: TreeNode[] = [];
  let resArr: number[] = [];
  let tempNode: TreeNode;
  let max: number = 0;
  if (root !== null) helperQueue.push(root);
  while (helperQueue.length > 0) {
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      tempNode = helperQueue.shift()!;
      if (i === 0) {
        max = tempNode.val;
      } else {
        max = max > tempNode.val ? max : tempNode.val;
      }
      if (tempNode.left) helperQueue.push(tempNode.left);
      if (tempNode.right) helperQueue.push(tempNode.right);
    }
    resArr.push(max);
  }
  return resArr;
}
