/* 
  给出一个完全二叉树，求出该树的节点个数。

  示例 1：
  输入：root = [1,2,3,4,5,6]
  输出：6

  示例 2：
  输入：root = []
  输出：0

  示例 3：
  输入：root = [1]
  输出：1
  提示：

  树中节点的数目范围是[0, 5 * 10^4]
  0 <= Node.val <= 5 * 10^4
  题目数据保证输入的树是 完全二叉树

  递归三部曲：
  1. 确定递归函数的参数和返回值
  2. 确定终止条件，通常写在开头
  3. 确定单层递归的逻辑。以下面的函数为例，单层递归的逻辑就是：返回左子树的节点数 + 返回右子树的节点数 + 1
*/
import { TreeNode } from "./TreeNode";

// 递归法
function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
}
