/* 
  这道题目说是二叉树，但116题目说是完整二叉树，其实没有任何差别，一样的代码一样的逻辑一样的味道
*/

function connect(root: Node | null): Node | null {
  let helperQueue: Node[] = [];
  let preNode: Node, curNode: Node;
  if (root !== null) helperQueue.push(root);
  while (helperQueue.length > 0) {
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      if (i === 0) {
        preNode = helperQueue.shift()!;
      } else {
        curNode = helperQueue.shift()!;
        preNode.next = curNode;
        preNode = curNode;
      }
      if (preNode.left) helperQueue.push(preNode.left);
      if (preNode.right) helperQueue.push(preNode.right);
    }
    preNode.next = null;
  }
  return root;
}
