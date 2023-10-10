/**
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
 */

function levelOrder(root: Node | null): number[][] {
  let helperQueue: Node[] = [];
  let resArr: number[][] = [];
  let tempArr: number[] = [];
  if (root !== null) helperQueue.push(root);
  let curNode: Node;
  while (helperQueue.length > 0) {
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      curNode = helperQueue.shift()!;
      tempArr.push(curNode.val);
      helperQueue.push(...curNode.children);
    }
    resArr.push(tempArr);
    tempArr = [];
  }
  return resArr;
}
