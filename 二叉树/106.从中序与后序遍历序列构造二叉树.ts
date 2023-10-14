/* 
  根据一棵树的中序遍历与后序遍历构造二叉树。
  注意: 你可以假设树中没有重复的元素。
*/
import { TreeNode } from "./TreeNode";

// 创建新数组
function buildTree1(inorder: number[], postorder: number[]): TreeNode | null {
  if (postorder.length === 0) return null;
  const rootVal: number = postorder.pop()!;
  const rootValIndex: number = inorder.indexOf(rootVal);
  const rootNode: TreeNode = new TreeNode(rootVal);
  rootNode.left = buildTree1(
    inorder.slice(0, rootValIndex),
    postorder.slice(0, rootValIndex)
  );
  rootNode.right = buildTree1(
    inorder.slice(rootValIndex + 1),
    postorder.slice(rootValIndex)
  );
  return rootNode;
}

// 使用数组索引
function buildTree2(inorder: number[], postorder: number[]): TreeNode | null {
  function recur(
    inorder: number[],
    postorder: number[],
    inBegin: number,
    inEnd: number,
    postBegin: number,
    postEnd: number
  ): TreeNode | null {
    if (postBegin === postEnd) return null;
    const rootVal: number = postorder[postEnd - 1]!;
    const rootValIndex: number = inorder.indexOf(rootVal, inBegin);
    const rootNode: TreeNode = new TreeNode(rootVal);

    const leftInorderBegin: number = inBegin;
    const leftInorderEnd: number = rootValIndex;
    const rightInorderBegin: number = rootValIndex + 1;
    const rightInorderEnd: number = inEnd;

    const leftPostorderBegin: number = postBegin;
    const leftPostorderEnd: number = postBegin + rootValIndex - inBegin;
    const rightPostorderBegin: number = leftPostorderEnd;
    const rightPostorderEnd: number = postEnd - 1;

    rootNode.left = recur(
      inorder,
      postorder,
      leftInorderBegin,
      leftInorderEnd,
      leftPostorderBegin,
      leftPostorderEnd
    );
    rootNode.right = recur(
      inorder,
      postorder,
      rightInorderBegin,
      rightInorderEnd,
      rightPostorderBegin,
      rightPostorderEnd
    );
    return rootNode;
  }
  return recur(inorder, postorder, 0, inorder.length, 0, inorder.length);
}
