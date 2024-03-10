/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

// O(n)。因为map的时间复杂度是O(1)
function twoSum(nums: number[], target: number): number[] {
  // 1. 生成一个ma  p，key为nums的值，value为nums的下标
  let helperMap: Map<number, number> = new Map();
  // 2. 定义一个变量，用来存储map中是否存在target - nums[i]的值
  let index: number | undefined;
  // 3. 定义结果数组
  let resArr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    index = helperMap.get(target - nums[i]);
    if (index !== undefined) {
      resArr = [i, index];
    }
    helperMap.set(nums[i], i);
  }
  return resArr;
}

// O(n log n)。因为sort的时间复杂度是O(n log n)
function twoSum1(nums: number[], target: number): number[] {
  // 1. 将nums从小到大排列
  nums.sort((a, b) => a - b);

  // 2. 定义变量
  const length: number = nums.length;
  let end: number = length - 1;
  const resArr: number[] = [];

  // 3. 遍历数组
  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (nums[i] + nums[end] > target) {
      end--;
    }
    if (nums[i] + nums[end] === target) {
      resArr.push(i, end);
      break;
    }
  }
  return resArr;
}

// test twosum1
console.log(twoSum1([2, 7, 11, 15], 9)); // [0, 1]
