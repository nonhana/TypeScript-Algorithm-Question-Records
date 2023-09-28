import { ListNode } from "./链表定义";

/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */
function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode: ListNode = new ListNode(0, head);
  let curNode: ListNode | null = dummyNode;
  while (curNode && curNode.next && curNode.next.next) {
    let firstNode: ListNode = curNode.next,
      secNode: ListNode = curNode.next.next,
      thirdNode: ListNode | null = curNode.next.next.next;
    curNode.next = secNode;
    secNode.next = firstNode;
    firstNode.next = thirdNode;
    curNode = firstNode;
  }
  return dummyNode.next;
}
