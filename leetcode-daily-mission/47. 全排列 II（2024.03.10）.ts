/* 
  给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

  示例 1：
  输入：nums = [1,1,2]
  输出：
  [[1,1,2],
  [1,2,1],
  [2,1,1]]

  示例 2：
  输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  提示：
  1 <= nums.length <= 8
  -10 <= nums[i] <= 10
*/

function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  const backtrack = (path: number[], used: boolean[]) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    for (let i: number = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }
      used[i] = true;
      backtrack([...path, nums[i]], used);
      used[i] = false;
    }
  };
  nums.sort((a, b) => a - b);
  backtrack([], new Array(nums.length).fill(false));
  return res;
}
