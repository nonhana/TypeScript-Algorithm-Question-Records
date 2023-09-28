import { ListNode } from "./链表定义";

// 移除链表中等于给定值 val 的所有节点。
function removeElement(head: ListNode | null, val: number): ListNode | null {
  // 1. 首先处理一下头节点
  while (head !== null && head.val === val) {
    head = head.next;
  }
  if (head === null) return head;

  // 2. 接着处理之后的几个节点
  let pre: ListNode = head;
  let cur: ListNode | null = head.next;

  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next;
    } else {
      pre = pre.next as ListNode;
    }
    cur = cur.next;
  }

  return head;
}

// 定义链表，重点在于对于各种不同特殊情况的判断
class MyLinkList {
  private size: number;
  private head: ListNode | null;
  private tail: ListNode | null;
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  private getNode(index: number) {
    let curNode = new ListNode(0, this.head);
    for (let i = 0; i <= index; i++) {
      curNode = curNode.next!;
    }
    return curNode;
  }

  // 方法1：拿到第index个节点的值
  getValByIndex(index: number) {
    // 先判断这个Index的合法性
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let curNode = this.getNode(index);
    return curNode.val;
  }

  // 方法2：加到头节点
  addAtHead(val: number) {
    let newNode = new ListNode(val, this.head);
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this.size++;
  }

  // 方法3：加到尾节点
  addAtTail(val: number) {
    let newNode = new ListNode(val, null);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  // 方法4：加到指定位置
  addAtIndex(index: number, val: number) {
    // 首先判断特殊情况
    // 1. index <= 0
    if (index <= 0) {
      this.addAtHead(val);
      return;
    }
    // 2. index === this.size
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }
    // 3. index > this.size(无效)
    if (index > this.size) {
      return;
    }
    // 正常情况
    // 获取到要插入节点位置的前一个节点
    let preNode = this.getNode(index - 1);
    let newNode = new ListNode(val, preNode.next);
    preNode.next = newNode;
    this.size++;
  }

  // 方法5：删除指定位置的节点
  deleteAtIndex(index: number) {
    // 判断特殊情况
    if (index < 0 || index >= this.size) {
      return;
    }
    // 针对头节点
    if (index === 0) {
      this.head = this.head!.next;
      // 进一步判断：如果这个链表只有一个节点
      if (index === this.size - 1) {
        this.tail = null;
      }
      this.size--;
      return;
    }
    // 针对尾节点
    if (index === this.size - 1) {
      let curNode = this.getNode(index - 1);
      this.tail = curNode;
      this.tail.next = null;
    }
    // 正常情况
    let curNode = this.getNode(index - 1);
    curNode.next = curNode.next!.next;
    this.size--;
  }
}

// 反转链表
function reverseList(head: ListNode) {
  let preNode: ListNode | null = null;
  let curNode: ListNode | null = head;
  let tempNode: ListNode | null;
  while (curNode) {
    tempNode = curNode.next;
    curNode.next = preNode; // 实际反转的代码，一次只反转一个箭头
    preNode = curNode;
    curNode = tempNode;
  }
}

// 环形链表
const detectCycle = (head: ListNode | null) => {
  let slowIndex: ListNode | null = head;
  let fastIndex: ListNode | null = head;
  while (fastIndex !== null && fastIndex.next !== null) {
    slowIndex = slowIndex!.next;
    fastIndex = fastIndex.next.next; // 因为这边已经进行了快指针节点的非null判断，不用!。
    if (slowIndex === fastIndex) {
      slowIndex = head;
      while (slowIndex !== fastIndex) {
        slowIndex = slowIndex!.next;
        fastIndex = fastIndex!.next;
      }
      return slowIndex;
    }
  }
  return null;
};

// 链表相交的那个节点
const getIntersectionNode = (
  headA: ListNode | null,
  headB: ListNode | null
) => {
  let sizeA: number = 0;
  let sizeB: number = 0;
  let curA: ListNode | null = headA;
  let curB: ListNode | null = headB;

  while (curA) {
    sizeA++;
    curA = curA.next;
  }
  while (curB) {
    sizeB++;
    curB = curB.next;
  }

  curA = headA;
  curB = headB;
  if (sizeA < sizeB) {
    [sizeA, sizeB] = [sizeB, sizeA];
    [curA, curB] = [curB, curA];
  }

  let gap = sizeA - sizeB;
  while (gap && curA) {
    gap--;
    curA = curA.next;
  }

  while (curA && curB) {
    if (curA === curB) {
      return curA;
    }
    curA = curA.next;
    curB = curB.next;
  }

  return null;
};

// 删除链表的倒数第N个节点
const removeNthFromEnd = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  let dummyHead = new ListNode(0, head);
  let slowIndex = dummyHead;
  let fastIndex = dummyHead;

  while (n) {
    n -= 1;
    fastIndex = fastIndex.next!;
  }

  while (fastIndex.next) {
    fastIndex = fastIndex.next;
    slowIndex = slowIndex.next!;
  }

  slowIndex.next = slowIndex.next!.next;

  return dummyHead.next;
};
