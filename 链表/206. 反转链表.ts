import { ListNode } from "./链表定义";

/**
 * 题意：反转一个单链表。
 * 示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL
 *
 * 涉及到三个节点
 * preNode: 前一个节点
 * curNode: 当前节点
 * tempNode: 临时节点，用来记录当前节点的下一个节点，便于将curNode移动到下一个节点
 */

// 双指针法
function reverseList(head: ListNode | null): ListNode | null {
  let preNode: ListNode | null = null;
  let curNode: ListNode | null = head;
  let tempNode: ListNode | null; // 这边对tempNode只是进行了声明，并未赋初始值
  // 循环条件是curNode不为null
  while (curNode) {
    tempNode = curNode.next; // 用来记录原来的当前节点的下一个节点
    curNode.next = preNode; // 这一步才是真正的反转，把当前节点指针指向前一个
    preNode = curNode; // 前节点向后移一位
    curNode = tempNode;
  }
  return preNode; // 最终返回的是前一个节点
}
