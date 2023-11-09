/**
 * 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回滑动窗口中的最大值。
 *
 * 进阶：
 * 你能在线性时间复杂度内解决此题吗？
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
  /** 单调递减队列 */
  class MonoQueue {
    private queue: number[];
    constructor() {
      this.queue = [];
    }

    /** 入队：value如果大于队尾元素，则将队尾元素删除，直至队尾元素大于value，或者队列为空 */
    public enqueue(value: number): void {
      let back: number | undefined = this.queue[this.queue.length - 1];
      while (back !== undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    }

    /** 出队：只有当队头元素等于value，才出队 */
    public dequeue(value: number): void {
      let top: number | undefined = this.top();
      if (top !== undefined && top === value) {
        this.queue.shift();
      }
    }
    public top(): number | undefined {
      return this.queue[0];
    }
  }

  const helperQueue: MonoQueue = new MonoQueue();

  let i: number = 0; // 滑动窗口的左边界
  let j: number = 0; // 滑动窗口的右边界
  let resArr: number[] = [];

  while (j < k) {
    helperQueue.enqueue(nums[j++]);
  }

  resArr.push(helperQueue.top()!);
  while (j < nums.length) {
    helperQueue.enqueue(nums[j]);
    helperQueue.dequeue(nums[i]);
    resArr.push(helperQueue.top()!);
    j++, i++;
  }
  return resArr;
}
