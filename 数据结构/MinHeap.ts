/**
 * 最小堆，仅仅只是维持堆顶的元素是最小值，不保证其他元素的顺序
 */
export class MinHeap {
  private heap: number[]; // 存储堆数据，使用数组来模拟二叉树的结构

  constructor() {
    this.heap = []; // 构造器初始化为空数组
  }

  /* ----------工具函数定义---------- */
  // #region
  // 获取左子节点的索引
  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  // 获取右子节点的索引
  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  // 获取父节点的索引
  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  // 判断是否有左子节点
  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  // 判断是否有右子节点
  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  // 判断是否有父节点
  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  // 获取左子节点的值
  private leftChild(index: number): number {
    return this.heap[this.getLeftChildIndex(index)];
  }

  // 获取右子节点的值
  private rightChild(index: number): number {
    return this.heap[this.getRightChildIndex(index)];
  }

  // 获取父节点的值
  private parent(index: number): number {
    return this.heap[this.getParentIndex(index)];
  }
  // #endregion

  // 交换两个节点
  private swap(indexOne: number, indexTwo: number): void {
    [this.heap[indexOne], this.heap[indexTwo]] = [
      this.heap[indexTwo],
      this.heap[indexOne],
    ];
  }

  // 插入新元素
  public insert(data: number): void {
    this.heap.push(data);
    this.heapifyUp();
  }

  // 上浮操作，在每一次push操作之后，都需要进行上浮操作来维持堆的性质
  private heapifyUp(): void {
    let index = this.heap.length - 1; // 从最末尾的节点开始上浮
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  // 删除堆顶元素
  public removeMin(): number {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  // 下沉操作，在每一次pop操作之后，都需要进行下沉操作来维持堆的性质
  private heapifyDown(): void {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

// 使用
const minHeap = new MinHeap();
minHeap.insert(15);
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(5);

console.log(minHeap.removeMin()); // 输出最小值，即 5
