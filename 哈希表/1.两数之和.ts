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
  let helperMap: Map<number, number> = new Map();
  let index: number | undefined;
  let resArr: number[] = [];

  for (let i = 0, length = nums.length; i < length; i++) {
    index = helperMap.get(target - nums[i]);
    if (index !== undefined) {
      resArr = [i, index];
    }
    helperMap.set(nums[i], i);
  }
  return resArr;
}
