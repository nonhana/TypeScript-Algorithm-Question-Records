/* 
  给定一个有相同值的二叉搜索树（BST），
  找出 BST 中的所有众数（出现频率最高的元素）。

  假定 BST 有如下定义：

  结点左子树中所含结点的值小于等于当前结点的值
  结点右子树中所含结点的值大于等于当前结点的值
  左子树和右子树都是二叉搜索树
*/
import { TreeNode } from "./TreeNode";

// 辅助Map法
function findMode1(root: TreeNode | null): number[] {
  if (root === null) return [];
  const countMap: Map<number, number> = new Map();
  function traverse(root: TreeNode | null): void {
    if (root === null) return;
    countMap.set(root.val, (countMap.get(root.val) || 0) + 1);
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);
  const countArr: number[][] = Array.from(countMap);
  countArr.sort((a, b) => {
    return b[1] - a[1];
  });
  const resArr: number[] = [];
  const maxCount: number = countArr[0][1];
  for (let i of countArr) {
    if (i[1] === maxCount) resArr.push(i[0]);
  }
  return resArr;
}

// 递归解决
function findMode2(root: TreeNode | null): number[] {
  let preNode: TreeNode | null = null;
  let maxCount: number = 0;
  let count: number = 0;
  let resArr: number[] = [];
  function traverse(root: TreeNode | null): void {
    if (root === null) return;
    traverse(root.left);
    if (preNode === null) {
      // 第一个节点
      count = 1;
    } else if (preNode.val === root.val) {
      count++;
    } else {
      count = 1;
    }
    if (count === maxCount) {
      resArr.push(root.val);
    } else if (count > maxCount) {
      maxCount = count;
      resArr.length = 0;
      resArr.push(root.val);
    }
    preNode = root;
    traverse(root.right);
  }
  traverse(root);
  return resArr;
}
