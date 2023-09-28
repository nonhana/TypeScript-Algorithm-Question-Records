/**
 * 给定一个含有n个正整数的数组和一个正整数s，找出该数组中满足其和≥s的长度最小的连续子数组，并返回其长度。如果不存在符合条件的子数组，返回0。
 * 示例：
 * 输入：s=7,nums=[2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组[4,3]是该条件下的长度最小的子数组。
 *
 * 提示：
 * 1<=target<=10^9
 * 1<=nums.length<=10^5
 * 1<=nums[i]<=10^5
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let left: number = 0,
    right: number = 0;
  let res: number = nums.length + 1;
  let sum: number = 0;
  while (right < nums.length) {
    sum += nums[right];
    if (sum >= target) {
      // 不断移动左指针，直到不能再缩小为止
      while (sum - nums[left] >= target) {
        sum -= nums[left++];
      }
      res = Math.min(res, right - left + 1);
    }
    right++;
  }
  return res === nums.length + 1 ? 0 : res;
}
