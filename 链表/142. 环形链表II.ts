import { ListNode } from "./链表定义";

/**
 * 题意： 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 为了表示给定链表中的环，使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 说明：不允许修改给定的链表。
 *
 * 分六步进行解决
 */
function detectCycle(head: ListNode | null): ListNode | null {
  // 1. 定义快慢指针，初始化的时候全部指向头节点（不用定义虚拟头节点，虚拟头节点只适合与边界相关的问题）
  let slowNode: ListNode | null = head;
  let fastNode: ListNode | null = head;

  // 2. 定义循环判断条件：快指针不为空，且快指针的下一个节点不为空
  while (fastNode !== null && fastNode.next !== null) {
    // 3. 每次循环快指针走两步，慢指针走一步
    slowNode = slowNode!.next;
    fastNode = fastNode.next.next;

    // 4. 如果快慢指针相遇，说明有环，此时将慢指针指向头节点，快指针不变，然后快慢指针同时走一步，再次相遇的节点就是环的入口节点
    if (slowNode === fastNode) {
      slowNode = head;
      while (slowNode !== fastNode) {
        slowNode = slowNode!.next;
        fastNode = fastNode!.next;
      }
      // 5. 最后将慢指针返回即可
      return slowNode;
    }
  }
  // 6. 走到这里说明快指针为空，或者快指针的下一个节点为空，说明没有环，直接返回 null
  return null;
}
