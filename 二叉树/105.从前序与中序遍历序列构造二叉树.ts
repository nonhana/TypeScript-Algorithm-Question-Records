import { TreeNode } from "./TreeNode";

// 新建数组
function buildTree1(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null;
  const rootVal: number = preorder[0];
  const rootNode: TreeNode = new TreeNode(rootVal);
  const rootValIndex: number = inorder.indexOf(rootVal);
  rootNode.left = buildTree1(
    preorder.slice(1, rootValIndex + 1),
    inorder.slice(0, rootValIndex)
  );
  rootNode.right = buildTree1(
    preorder.slice(rootValIndex + 1),
    inorder.slice(rootValIndex + 1)
  );
  return rootNode;
}

// 使用数组索引
function buildTree2(preorder: number[], inorder: number[]): TreeNode | null {
  function recur(
    preorder: number[],
    inorder: number[],
    preBegin: number,
    preEnd: number,
    inBegin: number,
    inEnd: number
  ): TreeNode | null {
    if (preBegin === preEnd) return null;
    const rootVal: number = preorder[preBegin];
    const rootNode: TreeNode = new TreeNode(rootVal);
    const rootValIndex: number = inorder.indexOf(rootVal, inBegin);

    const leftPreBegin: number = preBegin + 1;
    const leftPreEnd: number = preBegin + rootValIndex - inBegin + 1;
    const leftInBegin: number = inBegin;
    const leftInEnd: number = rootValIndex;

    const rightPreBegin: number = leftPreEnd;
    const rightPreEnd: number = preEnd;
    const rightInBegin: number = rootValIndex + 1;
    const rightInEnd: number = inEnd;

    rootNode.left = recur(
      preorder,
      inorder,
      leftPreBegin,
      leftPreEnd,
      leftInBegin,
      leftInEnd
    );
    rootNode.right = recur(
      preorder,
      inorder,
      rightPreBegin,
      rightPreEnd,
      rightInBegin,
      rightInEnd
    );
    return rootNode;
  }
  return recur(preorder, inorder, 0, preorder.length, 0, inorder.length);
}
