/**
 * 给定四个包含整数的数组列表 A, B, C, D，计算有多少个元组 (i, j, k, l)，使得 A[i] + B[j] + C[k] + D[l] = 0。
 *
 * 限制条件：
 * - 所有的 A, B, C, D 具有相同的长度 N
 * - 0 ≤ N ≤ 500
 * - 所有整数的范围在 -2^28 到 2^28 - 1 之间
 * - 最终结果不会超过 2^31 - 1
 *
 * 示例：
 * 输入：
 * A = [1, 2]
 * B = [-2, -1]
 * C = [-1, 2]
 * D = [0, 2]
 *
 * 输出：
 * 2
 *
 * 解释：
 * 两个元组如下：
 * (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
 * (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
 */

function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  let helperMap: Map<number, number> = new Map();
  let resNum: number = 0;
  let tempVal: number | undefined;
  for (let i of nums1) {
    for (let j of nums2) {
      tempVal = helperMap.get(i + j);
      helperMap.set(i + j, tempVal ? tempVal + 1 : 1);
    }
  }
  for (let k of nums3) {
    for (let l of nums4) {
      tempVal = helperMap.get(0 - (k + l));
      if (tempVal) {
        resNum += tempVal;
      }
    }
  }
  return resNum;
}
