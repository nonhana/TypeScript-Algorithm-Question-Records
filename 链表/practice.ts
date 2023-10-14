import { ListNode } from "./链表定义";

// 反转链表
const reverseList = (head: ListNode | null): ListNode | null => {
  if (head === null) return null;

  let preNode: ListNode | null = null;
  let curNode: ListNode | null = head;
  let tempNode: ListNode | null;

  while (curNode) {
    tempNode = curNode.next;
    curNode.next = preNode;

    preNode = curNode;
    curNode = tempNode;
  }

  return preNode;
};
