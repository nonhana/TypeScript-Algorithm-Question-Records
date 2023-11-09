import { ListNode } from "./链表定义";

/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 进阶：你能尝试使用一趟扫描实现吗？
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 1. 定义虚拟头节点
  let newHead: ListNode | null = new ListNode(0, head);

  // 2. 定义快慢指针，初始化的时候全部指向虚拟头节点
  let slowNode: ListNode = newHead;
  let fastNode: ListNode = newHead;

  // 3. 让快指针先走 n 步
  while (n) {
    fastNode = fastNode.next!; //由虚拟头节点前进n个节点时,fastNode.next可推断不为null。
    n--;
  }

  // 4. 让快慢指针同时走，直到快指针走到尾部节点
  while (fastNode.next) {
    //遍历直至fastNode.next = null， 即尾部节点。 此时slowNode指向倒数第n个节点。
    fastNode = fastNode.next;
    slowNode = slowNode.next!;
  }

  // 5. 此时慢指针的下一个节点就是要删除的节点，将其删除即可
  slowNode.next = slowNode.next!.next; //倒数第n个节点可推断其next节点不为空。

  // 6. 返回虚拟头节点的下一个节点，也就是head
  return newHead.next;
}
