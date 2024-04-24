/**
 * 给你一个数组nums和一个值val，你需要原地移除所有数值等于val的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用O(1)额外空间并原地修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 *
 * 示例1:给定nums=[3,2,2,3],val=3,函数应该返回新的长度2,并且nums中的前两个元素均为2。你不需要考虑数组中超出新长度后面的元素。
 *
 * 示例2:给定nums=[0,1,2,2,3,0,4,2],val=2,函数应该返回新的长度5,并且nums中的前五个元素为0,1,3,0,4。
 *
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 * 重点：只用返回长度
 */

function removeElement(nums: number[], val: number): number {
  let slowIndex: number = 0;
  let fastIndex: number = 0;

  while (fastIndex < nums.length) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex] = nums[fastIndex];
      slowIndex++;
    }
    fastIndex++;
  }
  return slowIndex;
}
