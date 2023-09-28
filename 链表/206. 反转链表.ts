import { ListNode } from "./链表定义";

/**
 * 题意：反转一个单链表。
 * 示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL
 */

// 双指针法
function reverseList(head: ListNode | null): ListNode | null {
  let preNode: ListNode | null = null,
    curNode: ListNode | null = head,
    tempNode: ListNode | null;
  while (curNode) {
    tempNode = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = tempNode;
  }
  return preNode;
}
