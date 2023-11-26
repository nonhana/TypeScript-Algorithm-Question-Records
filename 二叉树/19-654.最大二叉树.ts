/* 
  给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：
  二叉树的根是数组中的最大元素。
  左子树是通过数组中最大值左边部分构造出的最大二叉树。
  右子树是通过数组中最大值右边部分构造出的最大二叉树。
  通过给定的数组构建最大二叉树，并且输出这个树的根节点。

  思路：简单来说就是把整个数组以最大值为中心进行不断的分割。
*/
import { TreeNode } from "./TreeNode";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null; // 终止条件：nums为空

  let maxIndex: number = 0; // 最大值的索引
  let maxVal: number = nums[0]; // 最大值

  // 遍历数组，找到最大值
  for (let i = 1, length = nums.length; i < length; i++) {
    if (nums[i] > maxVal) {
      maxIndex = i;
      maxVal = nums[i];
    }
  }

  const rootNode: TreeNode = new TreeNode(maxVal); // 新建一个根节点
  rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex)); // 左边的最大值
  rootNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1)); // 右边的最大值
  return rootNode;
}
