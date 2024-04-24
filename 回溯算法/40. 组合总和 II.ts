/* 
  给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
  candidates 中的每个数字在每个组合中只能使用 一次 。
  注意：解集不能包含重复的组合。 

  示例 1:
  输入: candidates = [10,1,2,7,6,1,5], target = 8,
  输出:
  [
  [1,1,6],
  [1,2,5],
  [1,7],
  [2,6]
  ]

  示例 2:
  输入: candidates = [2,5,2,1,2], target = 5,
  输出:
  [
  [1,2,2],
  [5]
  ]
*/

function combinationSum2(candidates: number[], target: number): number[][] {
  let result: number[][] = [];
  let track: number[] = [];
  let trackSum: number = 0;
  let sorted = candidates.sort((a, b) => a - b);

  const backtrack = (floor: number) => {
    if (trackSum === target) {
      result.push([...track]);
      return;
    }
    if (trackSum > target) {
      return;
    }

    for (let i = floor; i < sorted.length; i++) {
      if (i > floor && sorted[i] === sorted[i - 1]) continue; // 剪枝操作，减去重复的item
      track.push(sorted[i]);
      trackSum += sorted[i];
      backtrack(i + 1);
      track.pop();
      trackSum -= sorted[i];
    }
  };

  backtrack(0);
  return result;
}
