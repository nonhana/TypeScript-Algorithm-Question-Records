/* 
  给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

  示例 1：
  输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  示例 2：
  输入：nums = [0,1]
  输出：[[0,1],[1,0]]

  示例 3：
  输入：nums = [1]
  输出：[[1]]
*/

function permute(nums: number[]): number[][] {
  let res: number[][] = []; // 返回结果数组
  let track: number[] = []; // 中间数组，用于存储回溯结果
  let used = new Array(nums.length).fill(false); // 用于记录对应的位置是否已经记录过

  const backtrack = () => {
    if (track.length === nums.length) {
      // 当track长度和传入的nums长度相等，代表已经将一种全排列方式遍历完成
      // 比如传入[1,2,3]，track为[3,1,2]，就将这一种方式push到结果数组
      res.push([...track]);
      return; // 在return后，实际上走的就是撤销选择的代码
    }

    // ↓ 回溯算法核心框架 ↓
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }

      // 进行选择，每一次的选择都是基于前面的基础
      track.push(nums[i]);
      used[i] = true;

      backtrack();

      // 撤销选择，发现没有多余的选择项时触发
      track.pop();
      used[i] = false;
    }
  };

  backtrack();

  return res;
}
