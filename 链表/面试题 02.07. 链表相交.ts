import { ListNode } from "./链表定义";

/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
 * 如果两个链表没有交点，返回 null 。
 */
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let sizeA: number = 0; // 链表A的长度
  let sizeB: number = 0; // 链表B的长度
  let curA: ListNode | null = headA; // 链表A的指针
  let curB: ListNode | null = headB; // 链表B的指针
  // 1. 计算链表A的长度
  while (curA) {
    sizeA++;
    curA = curA.next;
  }
  // 2. 计算链表B的长度
  while (curB) {
    sizeB++;
    curB = curB.next;
  }
  // 3. 判断链表A和链表B的长度，如果链表A的长度小于链表B的长度，那么交换两个链表的头节点，使得链表A的长度大于链表B的长度
  curA = headA;
  curB = headB;
  if (sizeA < sizeB) {
    [sizeA, sizeB] = [sizeB, sizeA];
    [curA, curB] = [curB, curA];
  }
  // 4. 计算两个链表的长度差值，然后让较长的链表先走差值步，然后两个链表同时走，直到两个链表相遇，相遇的节点就是交点
  let gap = sizeA - sizeB;
  while (gap && curA) {
    gap = gap - 1;
    curA = curA.next;
  }
  while (curA && curB) {
    if (curA === curB) {
      return curA;
    }
    curA = curA.next;
    curB = curB.next;
  }
  return null;
}
