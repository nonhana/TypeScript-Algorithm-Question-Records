/**
 * 给你一个按非递减顺序排序的整数数组nums，
 * 返回每个数字的平方组成的新数组，
 * 要求也按非递减顺序排序。
 *
 * 示例1：
 * 输入：nums=[-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 * 解释：平方后，数组变为[16,1,0,9,100]，排序后，数组变为[0,1,9,16,100]
 *
 * 示例2：
 * 输入：nums=[-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]
 */

// 双指针法
function sortedSquares1(nums: number[]): number[] {
  const ans: number[] = [];
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    // 右侧的元素不需要取绝对值，nums 为非递减排序的整数数组
    // 在同为负数的情况下，左侧的平方值一定大于右侧的平方值
    if (Math.abs(nums[left]) > nums[right]) {
      // 使用 Array.prototype.unshift() 直接在数组的首项插入当前最大值
      ans.unshift(nums[left] ** 2);
      left++;
    } else {
      ans.unshift(nums[right] ** 2);
      right--;
    }
  }

  return ans;
}

// 暴力解法
function sortedSquares2(nums: number[]): number[] {
  return nums.map((i) => i * i).sort((a, b) => a - b);
}
