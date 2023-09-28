/**
 * 给定两个数组nums1和nums2，返回它们的交集。
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function intersection1(nums1: number[], nums2: number[]): number[] {
  // 1. 定义存储结果的集合
  let resSet: Set<number> = new Set();
  // 2. 定义存储数组 nums1 中元素的集合
  let nums1Set: Set<number> = new Set(nums1);
  // 3. 遍历数组 nums2，判断 nums1Set 中是否存在当前元素
  for (let i of nums2) {
    if (nums1Set.has(i)) {
      resSet.add(i);
    }
  }
  // 4. 将集合转换为数组并返回
  return Array.from(resSet);
}

function intersection(nums1: number[], nums2: number[]): number[] {
  return Array.from(new Set(nums1.filter((i) => nums2.includes(i))));
}
