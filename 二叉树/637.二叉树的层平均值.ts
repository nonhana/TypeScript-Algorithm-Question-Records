/**
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
 */
import { TreeNode } from "./TreeNode";

function averageOfLevels(root: TreeNode | null): number[] {
  let helperQueue: TreeNode[] = [];
  let resArr: number[] = [];
  let total: number = 0;
  let tempNode: TreeNode;
  if (root !== null) helperQueue.push(root);
  while (helperQueue.length > 0) {
    let length = helperQueue.length;
    for (let i = 0; i < length; i++) {
      tempNode = helperQueue.shift()!;
      total += tempNode.val;
      if (tempNode.left) helperQueue.push(tempNode.left);
      if (tempNode.right) helperQueue.push(tempNode.right);
    }
    resArr.push(total / length);
    total = 0;
  }
  return resArr;
}
