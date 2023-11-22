/* 
  根据一棵树的中序遍历与后序遍历构造二叉树。
  注意: 你可以假设树中没有重复的元素。

  思路（递归三部曲）：
  1. 确定传入参数与返回值：传入两个数组，分别为中序遍历数组和后序遍历数组，返回构建的二叉树的根节点
  2. 确定终止条件：后序遍历数组变为空
  3. 确定单层递归的逻辑：
    - 首先从传入的这个后序遍历数组中取出最后一个值，也就是中节点的值，然后剔除掉（pop），并且找到这个中结点的值在中序遍历数组中的索引（indexOf）作为分割中序遍历数组的index
    - 新建一个树节点作为根节点，初始的默认值为上一步取到的值
    - 采用后续遍历（左右中）来从下到上构建树。
      - 构建左子树时，递归传入中序遍历数组和后序遍历数组的左侧部分；
      - 构建右子树时，递归传入中序遍历数组和后序遍历数组的右侧部分
    - 最后返回构建好的根节点即可
    */
import { TreeNode } from "./TreeNode";

// 创建新数组
// 参数：
function buildTree1(inorder: number[], postorder: number[]): TreeNode | null {
  if (postorder.length === 0) return null; // 终止条件：后序遍历数组变空

  const rootVal: number = postorder.pop()!; // 从后序遍历的数组中拿出最后的一个值并剔除
  const rootValIndex: number = inorder.indexOf(rootVal); // 找到现在拿到的值在中序遍历数组中的索引位置
  const rootNode: TreeNode = new TreeNode(rootVal); // 新建一个树节点作为根节点

  // 后序遍历：前后中；中序遍历：前中后
  // 所以这个“前”都是一样的，也就是[0, rootValIndex]的位置
  rootNode.left = buildTree1(
    inorder.slice(0, rootValIndex),
    postorder.slice(0, rootValIndex)
  );

  rootNode.right = buildTree1(
    inorder.slice(rootValIndex + 1), // +1是为了跳过根节点的位置
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
