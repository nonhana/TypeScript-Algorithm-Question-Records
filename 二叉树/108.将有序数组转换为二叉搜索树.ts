/* 
  将一个按照升序排列的有序数组，
  转换为一棵高度平衡二叉搜索树。
  本题中，
  一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
*/
import { TreeNode } from "./TreeNode";

// 递归法
function sortedArrayToBST(nums: number[]): TreeNode | null {
  function recur(nums: number[], left: number, right: number): TreeNode | null {
    if (left > right) return null;
    let mid: number = Math.floor((left + right) / 2);
    const root: TreeNode = new TreeNode(nums[mid]);
    root.left = recur(nums, left, mid - 1);
    root.right = recur(nums, mid + 1, right);
    return root;
  }
  return recur(nums, 0, nums.length - 1);
}
