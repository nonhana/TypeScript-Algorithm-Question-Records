/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * 需要三个节点进行计算
 */
import { ListNode } from "./链表定义";

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode: ListNode = new ListNode(0, head); // 定义虚拟头节点，指向head
  let curNode: ListNode | null = dummyNode; // 初始化当前节点为虚拟头节点

  // 循环条件：当前节点和其后两个节点均不可为null
  while (curNode && curNode.next && curNode.next.next) {
    let firstNode: ListNode = curNode.next;
    let secNode: ListNode = curNode.next.next;
    let thirdNode: ListNode | null = curNode.next.next.next;

    // 涉及到四个节点的移动
    curNode.next = secNode;
    secNode.next = firstNode;
    firstNode.next = thirdNode;

    curNode = firstNode; // 当前节点向后移一位
  }
  return dummyNode.next;
}

// 测试
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
console.log(swapPairs(head)); // 2 -> 1 -> 4 -> 3
