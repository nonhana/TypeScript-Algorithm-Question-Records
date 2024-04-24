/* 
  给你一棵二叉树的根节点，返回该树的直径。
  二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
  两节点之间路径的 长度 由它们之间边数表示。

  关键点：每一条二叉树的「直径」长度，就是一个节点的左右子树的最大深度之和
*/

import { TreeNode } from "./TreeNode";

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  // 计算二叉树的最大深度
  const maxDepth = (node: TreeNode | null): number => {
    if (node === null) {
      return 0;
    }
    // 对左右子树计算深度
    const leftDepth = maxDepth(node.left);
    const rightDepth = maxDepth(node.right);

    const currentDepth = leftDepth + rightDepth;

    maxDiameter = Math.max(maxDiameter, currentDepth);

    // 后续遍历的优势是能够拿到递归函数的返回值并且对其做一些处理
    return 1 + Math.max(leftDepth, rightDepth);
  };

  maxDepth(root);

  return maxDiameter;
}
