/* 
  给定一个二叉树，判断其是否是一个有效的二叉搜索树。
  假设一个二叉搜索树具有如下特征：
  节点的左子树只包含小于当前节点的数。
  节点的右子树只包含大于当前节点的数。
  所有左子树和右子树自身必须也是二叉搜索树。
*/
import { TreeNode } from "./TreeNode";

// 辅助数组法
function isValidBST1(root: TreeNode | null): boolean {
  const traversalArr: number[] = [];
  function inorderTraverse(root: TreeNode | null): void {
    if (root === null) return;
    inorderTraverse(root.left);
    traversalArr.push(root.val);
    inorderTraverse(root.right);
  }
  inorderTraverse(root);
  for (let i = 0, length = traversalArr.length; i < length - 1; i++) {
    if (traversalArr[i] >= traversalArr[i + 1]) return false;
  }
  return true;
}

// 递归法
function isValidBST2(root: TreeNode | null): boolean {
  let maxVal = -Infinity;
  function inorderTraverse(root: TreeNode | null): boolean {
    if (root === null) return true;
    let leftValid: boolean = inorderTraverse(root.left);
    if (!leftValid) return false;
    if (maxVal < root.val) {
      maxVal = root.val;
    } else {
      return false;
    }
    let rightValid: boolean = inorderTraverse(root.right);
    return leftValid && rightValid;
  }
  return inorderTraverse(root);
}
