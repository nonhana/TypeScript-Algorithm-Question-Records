import { ListNode } from "./链表定义";

export const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  // 当你需要创造一条新链表的时候，可以使用虚拟头结点简化边界情况的处理
  const dummy = new ListNode();
  let p = dummy;
  let p1 = list1,
    p2 = list2;

  while (p1 !== null && p2 !== null) {
    if (p1.val > p2.val) {
      p.next = p2;
      p2 = p2.next;
    } else {
      p.next = p1;
      p1 = p1.next;
    }
    p = p.next;
  }

  if (p1 !== null) {
    p.next = p1;
  }

  if (p2 !== null) {
    p.next = p2;
  }

  return dummy.next;
};
