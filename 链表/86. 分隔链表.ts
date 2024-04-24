/* 
  给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
  你应当保留两个分区中每个节点的初始相对位置。

  思路：将一个链表拆成两个链表，并且加以组合。
*/

import { ListNode } from "./链表定义";

export function partition(head: ListNode | null, x: number): ListNode | null {
  const dummy1 = new ListNode();
  const dummy2 = new ListNode();

  let p1 = dummy1, // 存放值小于x部分的链表（新建链表）
    p2 = dummy2; // 存放值大于x部分的链表（新建链表）

  let p = head; // p就是单纯拿来遍历原链表的指针

  while (p !== null) {
    if (p.val >= x) {
      p2.next = p;
      p2 = p2.next;
    } else {
      p1.next = p;
      p1 = p1.next;
    }

    // 需要断开链表中每个节点的next指针
    const temp = p.next;
    p.next = null;
    p = temp;
  }
  // 将小链表接到大链表前
  p1.next = dummy2.next;

  return dummy1.next;
}
