/**
 * 给定一个n个元素有序的（升序）整型数组nums和一个目标值target，
 * 写一个函数搜索nums中的target，如果目标值存在返回下标，否则返回-1。
 */

// （版本一）左闭右闭区间
function searchOne(nums: number[], target: number): number {
  let mid: number,
    left: number = 0,
    right: number = nums.length - 1;
  while (left <= right) {
    // 位运算 + 防止大数溢出
    mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// （版本二）左闭右开区间
function searchTwo(nums: number[], target: number): number {
  let mid: number,
    left: number = 0,
    right: number = nums.length;
  while (left < right) {
    // 位运算 + 防止大数溢出
    mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
