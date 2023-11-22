/* 
  相对于 104.二叉树的最大深度 ，本题还也可以使用层序遍历的方式来解决，思路是一样的。
  需要注意的是，只有当左右孩子都为空的时候，才说明遍历的最低点了。如果其中一个孩子为空则不是最低点
*/
import { TreeNode } from "./TreeNode";

function minDepth(root: TreeNode | null): number {
  let helperQueue: TreeNode[] = [];
  let resMin: number = 0;
  let tempNode: TreeNode;
  if (root !== null) helperQueue.push(root);
  while (helperQueue.length > 0) {
    resMin++;
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      tempNode = helperQueue.shift()!;
      // 比最大深度多了这一行：一旦检测到节点的左右都为空，说明到了最低点
      if (tempNode.left === null && tempNode.right === null) return resMin;
      if (tempNode.left !== null) helperQueue.push(tempNode.left);
      if (tempNode.right !== null) helperQueue.push(tempNode.right);
    }
  }
  return resMin;
}
