/* 
  给定一个二叉树，找出其最小深度。
  最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
  说明：叶子节点是指没有子节点的节点。
*/
import { TreeNode } from "../二叉树/TreeNode";

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let q = [root]; // 核心数据结构（队列），初始化时将起点加入队列
  let depth = 1; // 目标结果返回值

  // 固定结构：while (队列.length > 0) {} ，用来控制向下走
  while (q.length > 0) {
    let size = q.length; // 取到本次循环的队列的长度
    // 将当前队列中的所有节点都向四周进行扩散，在这个题目中表示横向扩散
    for (let i = 0; i < size; i++) {
      let cur = q.shift()!;
      // 判断是否到达了终点
      if (cur.left === null && cur.right === null) {
        return depth;
      }
      // 将cur的相邻节点加入队列
      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }
    depth++;
  }

  return depth;
}
