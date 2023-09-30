/**
 * 问题描述：
 * 你有 n 枚花的种子。每枚种子必须先种下，然后才能开始生长和开花。播种和生长都需要时间。
 * 给你两个下标从 0 开始的整数数组 plantTime 和 growTime，它们的长度都是 n。
 *
 * - plantTime[i] 是播种第 i 枚种子所需的完整天数。每天，你只能为播种某一枚种子而劳作。
 *   无需连续几天都在种同一枚种子，但种子播种必须在你工作的天数达到 plantTime[i] 之后才算完成。
 * - growTime[i] 是第 i 枚种子完全种下后生长所需的完整天数。在它生长的最后一天之后，将会开花并永远绽放。
 *
 * 从第 0 天开始，你可以按任意顺序播种种子。返回所有种子都开花的最早一天是第几天。
 *
 * 示例：
 * 输入：plantTime = [1,4,3], growTime = [2,3,1]
 * 输出：9
 *
 * 输入：plantTime = [1,2,3,2], growTime = [2,1,2,1]
 * 输出：9
 *
 * 输入：plantTime = [1], growTime = [1]
 * 输出：2
 *
 * 提示：
 * - n == plantTime.length == growTime.length
 * - 1 <= n <= 10^5
 * - 1 <= plantTime[i], growTime[i] <= 10^4
 */

function earliestFullBloom(plantTime: number[], growTime: number[]): number {
  return (
    growTime
      // 1. 生成数组 [0, 1, 2, ..., n - 1]
      .map((_, i) => i)
      // 2. 按照growTime的值降序排列
      .sort((a, b) => growTime[b] - growTime[a])
      // 3. 此处reduce的作用，是计算出每一天的最大值
      .reduce(
        ([max, current], id) => [
          Math.max(max, current + plantTime[id] + growTime[id] + 1),
          current + plantTime[id],
        ],
        [-Infinity, -1]
      )[0]
  );
}
