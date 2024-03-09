/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意： 答案中不可以包含重复的三元组。
 *
 * 示例：
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 *
 *
 * 这题把和定死了是0，其实可以变一下，把和定死为target，然后把target作为参数传进去，就可以作为一个新题目来做了
 */

function threeSum(nums: number[]): number[][] {
  // 1. 对原数组进行排序(从小到大)，便于之后遍历
  nums.sort((a, b) => a - b);

  // 2. 定义变量：数组长度，左指针，右指针，结果数组
  let length = nums.length;
  let left: number = 0; // 最左端
  let right: number = length - 1; // 最右端
  let resArr: number[][] = []; // 存放结果的数组

  // 3. 遍历数组
  for (let i = 0; i < length; i++) {
    // 特殊情况（两种）：
    // 3.1 nums经过排序后，只要nums[i]>0, 此后的nums[i] + nums[left] + nums[right]均大于0,可以提前终止循环。
    if (nums[i] > 0) {
      return resArr;
    }
    // 3.2 如果当前值与前一个值相同，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // 3.3 更改左指针和右指针的值，缩小范围
    left = i + 1;
    right = length - 1;
    while (left < right) {
      // 3.4 如果三数之和等于0，则将结果添加到结果数组中
      let total: number = nums[i] + nums[left] + nums[right];
      if (total === 0) {
        resArr.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        // 如果左/右指针的值与前/后一个值相同，则跳过
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
