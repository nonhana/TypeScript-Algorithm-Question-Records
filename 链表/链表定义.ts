export class ListNode {
  public val: number; // 链表节点的值
  public next: ListNode | null; // 链表节点的指针（指向下一个节点）
  // 构造函数的参数都是可选的
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val; // 如果没有传值，就默认为 0
    this.next = next === undefined ? null : next; // 如果没有传值，就默认为 null
  }
}
