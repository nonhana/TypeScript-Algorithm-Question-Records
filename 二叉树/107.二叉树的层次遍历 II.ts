/**
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 */

function levelOrderBottom(root: TreeNode | null): number[][] {
  let helperQueue: TreeNode[] = [];
  let resArr: number[][] = [];
  let tempArr: number[] = [];
  let tempNode: TreeNode;
  if (root !== null) helperQueue.push(root);
  while (helperQueue.length > 0) {
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      tempNode = helperQueue.shift()!;
      tempArr.push(tempNode.val);
      if (tempNode.left !== null) helperQueue.push(tempNode.left);
      if (tempNode.right !== null) helperQueue.push(tempNode.right);
    }
    resArr.push(tempArr);
    tempArr = [];
  }
  return resArr.reverse();
}
