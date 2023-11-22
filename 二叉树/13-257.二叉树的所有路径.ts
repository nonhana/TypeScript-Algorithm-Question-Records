/* 
  给定一个二叉树，返回所有从根节点到叶子节点的路径。
  说明: 叶子节点是指没有子节点的节点。
*/
import { TreeNode } from "./TreeNode";

function binaryTreePaths(root: TreeNode | null): string[] {
  function recur(node: TreeNode, route: string, resArr: string[]): void {
    route += String(node.val); // 拼接路径
    // 如果是叶子节点，就把路径推入结果数组
    if (node.left === null && node.right === null) {
      resArr.push(route);
      return;
    }
    if (node.left !== null) recur(node.left, route + "->", resArr);
    if (node.right !== null) recur(node.right, route + "->", resArr);
  }
  const resArr: string[] = [];
  if (root === null) return resArr;
  recur(root, "", resArr);
  return resArr;
}
