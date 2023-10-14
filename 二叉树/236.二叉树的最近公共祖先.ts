/* 
  给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

  百度百科中最近公共祖先的定义为：
  “对于有根树 T 的两个结点 p、q，
  最近公共祖先表示为一个结点 x，
  满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
*/
import { TreeNode } from "./TreeNode";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left !== null && right !== null) return root;
  if (left !== null) return left;
  if (right !== null) return right;
  return null;
}
