/**
 * 题意：给定一个包含 n 个整数的数组 nums 和一个目标值 target，
 * 判断 nums 中是否存在四个元素 a，b，c 和 d ，
 * 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 注意：
 * 答案中不可以包含重复的四元组。
 *
 * 示例：
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 满足要求的四元组集合为： [ [-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2] ]
 *
 *
 * 简单来说，就是先定死前两个数，然后用双指针遍历后面的数，找到和为target的四个数
 * 其实对于五数之和、六数之和等等，都可以用这种方法来解决，也就是定死n-2个数，然后用双指针遍历后面的数
 * 只不过时间复杂度会越来越高，不过也是可以接受的
 */

function fourSum(nums: number[], target: number): number[][] {
  // 1. 对原数组进行排序
  nums.sort((a, b) => a - b);
  // 2. 定义变量：数组长度，第一个指针，第二个指针，第三个指针，第四个指针，结果数组
  let first: number = 0,
    second: number,
    third: number,
    fourth: number;
  let length: number = nums.length;
  let resArr: number[][] = [];
  // 3. 遍历数组
  for (; first < length; first++) {
    // 3.1 如果当前值与前一个值相同，则跳过
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    // 3.2 更改第二个指针的值，缩小范围，并基于第二个指针遍历数组
    for (second = first + 1; second < length; second++) {
      if (second - first > 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      third = second + 1;
      fourth = length - 1;
      while (third < fourth) {
        let total: number =
          nums[first] + nums[second] + nums[third] + nums[fourth];
        if (total === target) {
          resArr.push([nums[first], nums[second], nums[third], nums[fourth]]);
          third++;
          fourth--;
          while (nums[third] === nums[third - 1]) third++;
          while (nums[fourth] === nums[fourth + 1]) fourth--;
        } else if (total < target) {
          third++;
        } else {
          fourth--;
        }
      }
    }
  }
  return resArr;
}
