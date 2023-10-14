/* 
  给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：
  二叉树的根是数组中的最大元素。
  左子树是通过数组中最大值左边部分构造出的最大二叉树。
  右子树是通过数组中最大值右边部分构造出的最大二叉树。
  通过给定的数组构建最大二叉树，并且输出这个树的根节点。
*/
import { TreeNode } from "./TreeNode";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;
  let maxIndex: number = 0;
  let maxVal: number = nums[0];
  for (let i = 1, length = nums.length; i < length; i++) {
    if (nums[i] > maxVal) {
      maxIndex = i;
      maxVal = nums[i];
    }
  }
  const rootNode: TreeNode = new TreeNode(maxVal);
  rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  rootNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return rootNode;
}
