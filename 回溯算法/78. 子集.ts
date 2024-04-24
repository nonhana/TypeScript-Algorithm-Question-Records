/* 
  给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的
  子集（幂集）。
  解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

  示例 1：
  输入：nums = [1,2,3]
  输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

  示例 2：
  输入：nums = [0]
  输出：[[],[0]]
*/

function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const track: number[] = [];

  // 传入层数，一层一层遍历
  const backtrack = (start: number) => {
    res.push([...track]);

    for (let i = start; i < nums.length; i++) {
      track.push(nums[i]);
      backtrack(i + 1);
      track.pop();
    }
  };

  backtrack(0);
  return res;
}
