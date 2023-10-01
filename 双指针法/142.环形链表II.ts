/**
 * 题意： 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 为了表示给定链表中的环，使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 *
 * 说明：不允许修改给定的链表。
 */
import { ListNode } from "../链表/链表定义";

function detectCycle(head: ListNode | null): ListNode | null {
  let slowNode: ListNode | null = head,
    fastNode: ListNode | null = head;
  while (fastNode !== null && fastNode.next !== null) {
    slowNode = slowNode!.next;
    fastNode = fastNode.next.next;
    if (slowNode === fastNode) {
      slowNode = head;
      while (slowNode !== fastNode) {
        slowNode = slowNode!.next;
        fastNode = fastNode!.next;
      }
      return slowNode;
    }
  }
  return null;
}
