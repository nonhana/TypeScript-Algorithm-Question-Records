/**
 * push(x) -- 元素 x 入栈
 * pop() -- 移除栈顶元素
 * top() -- 获取栈顶元素
 * empty() -- 返回栈是否为空
 *
 * 注意:
 * 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
 * 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 * 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
 */

// 版本一：使用两个队列模拟栈
class MyStack1 {
  private queue: number[];
  private tempQueue: number[];
  constructor() {
    this.queue = [];
    this.tempQueue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    for (let i = 0, length = this.queue.length - 1; i < length; i++) {
      this.tempQueue.push(this.queue.shift()!);
    }
    let res: number = this.queue.pop()!;
    let temp: number[] = this.queue;
    this.queue = this.tempQueue;
    this.tempQueue = temp;
    return res;
  }

  top(): number {
    let res: number = this.pop();
    this.push(res);
    return res;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

// 版本二：使用一个队列模拟栈
class MyStack2 {
  private queue: number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    for (let i = 0, length = this.queue.length - 1; i < length; i++) {
      this.queue.push(this.queue.shift()!);
    }
    return this.queue.shift()!;
  }

  top(): number {
    let res: number = this.pop();
    this.push(res);
    return res;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
