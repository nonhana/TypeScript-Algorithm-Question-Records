import { ListNode } from "./链表定义";

/**
 * 题意：删除链表中等于给定值 val 的所有节点。
 * 示例 1： 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]
 * 示例 2： 输入：head = [], val = 1 输出：[]
 * 示例 3： 输入：head = [7,7,7,7], val = 7 输出：[]
 */
function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 1. 如果头节点的值为val，就删除头部节点
  while (head !== null && head.val === val) {
    head = head.next;
  }

  if (head === null) return head;

  let pre: ListNode = head; // pre指向当前节点的前一个节点
  let cur: ListNode | null = head.next; // cur指向当前节点，默认是头节点的后一个节点

  // 删除非头部节点
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next;
    } else {
      // 此处不加类型断言时：编译器会认为pre类型为ListNode, pre.next类型为ListNode | null
      pre = pre.next as ListNode;
    }
    cur = cur.next;
  }
  return head;
}
