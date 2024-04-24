/* 
  给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
  解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

  示例 1：
  输入：nums = [1,2,2]
  输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

  示例 2：
  输入：nums = [0]
  输出：[[],[0]]
*/

function subsetsWithDup(nums: number[]): number[][] {
  let res: number[][] = [];
  let track: number[] = [];

  // 将nums数组进行排序（从小到大），以便剪枝算法的实现
  nums.sort((a, b) => a - b);

  const backtrack = (nums: number[], start: number) => {
    res.push([...track]);

    for (let i = start; i < nums.length; i++) {
      // 进行剪枝：相邻的数组相同
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      track.push(nums[i]);
      backtrack(nums, i + 1);
      track.pop();
    }
  };

  backtrack(nums, 0);
  return res;
}
