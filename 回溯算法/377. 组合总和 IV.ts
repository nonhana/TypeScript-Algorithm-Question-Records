/* 
  给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。
  题目数据保证答案符合 32 位整数范围。

  示例 1：
  输入：nums = [1,2,3], target = 4
  输出：7
  解释：
  所有可能的组合为：
  (1, 1, 1, 1)
  (1, 1, 2)
  (1, 2, 1)
  (1, 3)
  (2, 1, 1)
  (2, 2)
  (3, 1)
  请注意，顺序不同的序列被视作不同的组合。

  示例 2：
  输入：nums = [9], target = 3
  输出：0
*/

/* 
  一般解法：深度优先搜索进行回溯，但这种解法会超出时间。
  优化解法：观察到这道题目要求返回的实际上并非所有的组合，而仅仅是返回所有的组合数量。
  因此，可以考虑使用动态规划，减少重复子问题的计算。并且可以使用记忆化递归来避免重复计算
*/

/* function combinationSum4(nums: number[], target: number): number {
  let result: number = 0;
  let track: number[] = [];
  let trackSum: number = 0;

  const backtrack = () => {
    if (trackSum === target) {
      result++;
      return;
    }

    if (trackSum > target) return;

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      track.push(nums[i]);
      trackSum += nums[i];
      backtrack();
      trackSum -= nums[i];
      track.pop();
    }
  };

  backtrack();

  return result;
} */

function combinationSum4(nums: number[], target: number): number {
  let memo: Record<number, number> = {};

  // 使用 DFS 算法
  const dfs = (remaining: number): number => {
    if (remaining in memo) return memo[remaining];

    // base case
    if (remaining === 0) return 1;
    if (remaining < 0) return 0;

    let count = 0; // 保存结果

    for (let num of nums) {
      count += dfs(remaining - num);
    }

    memo[remaining] = count;
    return count;
  };

  return dfs(target);
}

// test
console.log(combinationSum4([1, 2, 3], 32));
