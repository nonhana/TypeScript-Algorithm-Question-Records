/**
 * 给你一个二叉树，请你返回其按层序遍历得到的节点值。 （即逐层地，从左到右访问所有节点）。
 */
import { TreeNode } from "./TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
  let helperQueue: TreeNode[] = []; // 辅助队列
  let tempArr: number[] = []; // 临时数组
  let curNode: TreeNode; // 当前遍历到的节点
  let res: number[][] = []; // 保存结果

  if (root !== null) helperQueue.push(root);

  while (helperQueue.length > 0) {
    // 在遍历每一层的时候：1. 把当前helperQueue中的元素全部压进tempArr中；2. 都将下一层的所有元素压进队列
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      curNode = helperQueue.shift()!; // 取到队列的第一个元素，并将其移出队列
      tempArr.push(curNode.val); // 暂时保存起来这一层的值
      // 先左再右按顺序压进，没有递归或者迭代，每一次都会更改队列的长度
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
