/**
 * 题意：反转一个单链表。
 *
 * 示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL
 */
import { ListNode } from "../链表/链表定义";

// 双指针法
function reverseList1(head: ListNode | null): ListNode | null {
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

// 递归（从前往后翻转）
function reverseList2(head: ListNode | null): ListNode | null {
  function recur(
    preNode: ListNode | null,
    curNode: ListNode | null
  ): ListNode | null {
    if (curNode === null) return preNode;
    let tempNode: ListNode | null = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = tempNode;
    return recur(preNode, curNode);
  }
  return recur(null, head);
}

// 递归（从后往前翻转）
function reverseList3(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let newHead: ListNode | null;
  function recur(node: ListNode | null, preNode: ListNode | null): void {
    if (node.next === null) {
      newHead = node;
      newHead.next = preNode;
    } else {
      recur(node.next, node);
      node.next = preNode;
    }
  }
  recur(head, null);
  return newHead;
}
