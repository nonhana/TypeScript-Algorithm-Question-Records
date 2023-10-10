/* 
  给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
  struct Node {
    int val;
    Node *left;
    Node *right;
    Node *next;
  }
  填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

  初始状态下，所有 next 指针都被设置为 NULL。

  思路：
  本题依然是层序遍历，只不过在单层遍历的时候记录一下本层的头部节点，然后在遍历的时候让前一个节点指向本节点就可以了
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
