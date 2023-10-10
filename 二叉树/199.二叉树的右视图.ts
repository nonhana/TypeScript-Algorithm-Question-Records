/**
 *
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 */
import { TreeNode } from "./TreeNode";

function rightSideView(root: TreeNode | null): number[] {
  let helperQueue: TreeNode[] = [];
  let resArr: number[] = [];
  let tempNode: TreeNode;
  if (root !== null) helperQueue.push(root);
  while (helperQueue.length > 0) {
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      tempNode = helperQueue.shift()!;
      if (i === length - 1) resArr.push(tempNode.val);
      if (tempNode.left !== null) helperQueue.push(tempNode.left);
      if (tempNode.right !== null) helperQueue.push(tempNode.right);
    }
  }
  return resArr;
}
