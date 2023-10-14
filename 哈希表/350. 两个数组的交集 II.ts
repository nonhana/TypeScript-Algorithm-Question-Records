/**
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
 * 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。
 * 可以不考虑输出结果的顺序。
 */
function intersect(nums1: number[], nums2: number[]): number[] {
  const countMap1: Map<number, number> = new Map();
  const countMap2: Map<number, number> = new Map();

  // 统计 nums1 中每个元素出现的次数
  for (const num of nums1) {
    countMap1.set(num, (countMap1.get(num) || 0) + 1);
  }

  // 统计 nums2 中每个元素出现的次数
  for (const num of nums2) {
    countMap2.set(num, (countMap2.get(num) || 0) + 1);
  }

  const result: number[] = [];

  // 构建交集数组
  for (const [num, count1] of countMap1) {
    const count2 = countMap2.get(num);
    if (count2 !== undefined) {
      const intersectionCount = Math.min(count1, count2);
      for (let i = 0; i < intersectionCount; i++) {
        result.push(num);
      }
    }
  }

  return result;
}
