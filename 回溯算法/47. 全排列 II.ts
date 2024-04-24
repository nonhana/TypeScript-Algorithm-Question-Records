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
*/

function permuteUnique(nums: number[]): number[][] {
  let result: number[][] = [];
  let track: number[] = [];
  let used = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);

  const backtrack = () => {
    if (track.length === nums.length) {
      result.push([...track]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      if (i > 0 && nums[i] === nums[i - 1] && !used[i]) {
        continue;
      }
      track.push(nums[i]);
      used[i] = true;
      backtrack();
      track.pop();
      used[i] = false;
    }
  };

  backtrack();
  return result;
}
