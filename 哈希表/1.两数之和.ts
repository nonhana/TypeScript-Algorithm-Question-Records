/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 *
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

function twoSum(nums: number[], target: number): number[] {
  // 1. 生成一个map，key为nums的值，value为nums的下标
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
