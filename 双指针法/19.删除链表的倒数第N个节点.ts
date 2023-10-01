/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *
 * 进阶：你能尝试使用一趟扫描实现吗？
 */
import { ListNode } from "../链表/链表定义";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let newHead: ListNode | null = new ListNode(0, head);
  //根据leetcode题目的定义可推断这里快慢指针均不需要定义为ListNode | null。
  let slowNode: ListNode = newHead;
  let fastNode: ListNode = newHead;

  while (n--) {
    fastNode = fastNode.next!; //由虚拟头节点前进n个节点时,fastNode.next可推断不为null。
  }
  while (fastNode.next) {
    //遍历直至fastNode.next = null， 即尾部节点。 此时slowNode指向倒数第n个节点。
    fastNode = fastNode.next;
    slowNode = slowNode.next!;
  }
  slowNode.next = slowNode.next!.next; //倒数第n个节点可推断其next节点不为空。
  return newHead.next;
}
