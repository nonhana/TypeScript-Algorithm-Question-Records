/* 
  给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
  你可以按 任何顺序 返回答案。
*/

function combine(n: number, k: number): number[][] {
  let result: number[][] = [];
  let track: number[] = [];

  const backtrack = (floor: number) => {
    if (track.length === k) {
      result.push([...track]);
      return;
    }

    for (let i = floor; i <= n; i++) {
      track.push(i);
      backtrack(i + 1); // i + 1的目的是让每一次回溯都基于前一次的基础之上
      track.pop();
    }
  };

  backtrack(1);
  return result;
}

// test
console.log(combine(5, 2));
