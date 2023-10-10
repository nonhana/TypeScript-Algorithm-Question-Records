/* 
  给定一个二叉树，找出其最大深度。
  二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
  说明: 叶子节点是指没有子节点的节点。

  思路：
  使用迭代法的话，使用层序遍历是最为合适的，因为最大的深度就是二叉树的层数，和层序遍历的方式极其吻合。
  在二叉树中，一层一层的来遍历二叉树，记录一下遍历的层数就是二叉树的深度。
  所以这道题的迭代法就是一道模板题，可以使用二叉树层序遍历的模板来解决的。
*/
import { TreeNode } from "./TreeNode";

function maxDepth(root: TreeNode | null): number {
  let helperQueue: TreeNode[] = [];
  let resDepth: number = 0;
  let tempNode: TreeNode;
  if (root !== null) helperQueue.push(root);
  while (helperQueue.length > 0) {
    resDepth++;
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      tempNode = helperQueue.shift()!;
      if (tempNode.left) helperQueue.push(tempNode.left);
      if (tempNode.right) helperQueue.push(tempNode.right);
    }
  }
  return resDepth;
}
