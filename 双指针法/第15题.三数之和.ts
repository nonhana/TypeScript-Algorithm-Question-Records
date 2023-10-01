/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意： 答案中不可以包含重复的三元组。
 *
 * 示例：
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 */

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let length = nums.length;
  let left: number = 0,
    right: number = length - 1;
  let resArr: number[][] = [];
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      return resArr; //nums经过排序后，只要nums[i]>0, 此后的nums[i] + nums[left] + nums[right]均大于0,可以提前终止循环。
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    left = i + 1;
    right = length - 1;
    while (left < right) {
      let total: number = nums[i] + nums[left] + nums[right];
      if (total === 0) {
        resArr.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (nums[right] === nums[right + 1]) {
          right--;
        }
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (total < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return resArr;
}
