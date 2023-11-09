import { ListNode } from "./链表定义";

class MyLinkedList {
  private size: number; // 记录链表长度
  private head: ListNode | null; // 头节点
  private tail: ListNode | null; // 尾节点

  // 此处的构造函数并没有传递默认值，只是将所有的值初始化
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // 获取链表中第index个节点的值
  get(index: number): number {
    // 索引无效的情况
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let curNode = this.getNode(index);
    // 这里在前置条件下，理论上不会出现 null的情况
    return curNode.val;
  }

  // 在链表的第一个元素之前添加一个值为 val的节点。插入后，新节点将成为链表的第一个节点。
  addAtHead(val: number): void {
    let node: ListNode = new ListNode(val, this.head); // 把next指向原来的头节点
    this.head = node; // 把头节点指向新节点
    // 如果链表中只有一个元素，那么新节点既是头节点也是尾节点
    if (!this.tail) {
      this.tail = node;
    }
    this.size++;
  }

  // 将值为 val 的节点追加到链表的最后一个元素。
  addAtTail(val: number): void {
    let node: ListNode = new ListNode(val, null);
    if (this.tail) {
      this.tail.next = node;
    } else {
      // 还没有尾节点，说明一个节点都还没有
      this.head = node;
    }
    this.tail = node;
    this.size++;
  }

  // 在链表中的第 index个节点之前添加值为 val的节点。
  // 如果 index等于链表的长度，则该节点将附加到链表的末尾。如果 index大于链表长度，则不会插入节点。如果 index小于0，则在头部插入节点。
  addAtIndex(index: number, val: number): void {
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }
    if (index > this.size) {
      return;
    }
    // <= 0 的情况都是在头部插入
    if (index <= 0) {
      this.addAtHead(val);
      return;
    }
    // 正常情况
    // 获取插入位置的前一个 node
    let curNode = this.getNode(index - 1);
    let node: ListNode = new ListNode(val, curNode.next);
    curNode.next = node;
    this.size++;
  }

  // 如果索引 index有效，则删除链表中的第 index个节点。
  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return;
    }
    // 处理头节点
    if (index === 0) {
      this.head = this.head!.next;
      // 如果链表中只有一个元素，删除头节点后，需要处理尾节点
      if (index === this.size - 1) {
        this.tail = null;
      }
      this.size--;
      return;
    }
    // 索引有效
    let curNode: ListNode = this.getNode(index - 1);
    curNode.next = curNode.next!.next;
    // 处理尾节点
    if (index === this.size - 1) {
      this.tail = curNode;
    }
    this.size--;
  }

  // 获取指定 Node节点
  private getNode(index: number): ListNode {
    // 这里不存在没办法获取到节点的情况，都已经在前置方法做过判断
    // 创建虚拟头节点
    let curNode: ListNode = new ListNode(0, this.head);
    for (let i = 0; i <= index; i++) {
      // 理论上不会出现 null
      curNode = curNode.next!;
    }
    return curNode;
  }
}
