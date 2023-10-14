/* 
  给定一个二叉搜索树的根节点 root 和一个值 key，
  删除二叉搜索树中的 key 对应的节点，
  并保证二叉搜索树的性质不变。
  返回二叉搜索树（有可能被更新）的根节点的引用。
  一般来说，删除节点可分为两个步骤：
  首先找到需要删除的节点； 
  如果找到了，删除它。 
  说明： 要求算法时间复杂度为 $O(h)$，h 为树的高度。
*/
import { TreeNode } from "./TreeNode";

// 递归
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) return null;
  if (root.val === key) {
    if (root.left === null && root.right === null) return null;
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    let curNode: TreeNode = root.right;
    while (curNode.left !== null) {
      curNode = curNode.left;
    }
    curNode.left = root.left;
    return root.right;
  }
  if (root.val > key) root.left = deleteNode(root.left, key);
  if (root.val < key) root.right = deleteNode(root.right, key);
  return root;
}
