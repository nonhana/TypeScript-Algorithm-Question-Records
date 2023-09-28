/**
 * 题目描述：
 * 给你一个下标从0开始的二维整数数组flowers，其中flowers[i]=[starti,endi]表示第i朵花的花期从starti到endi（都包含）。
 * 同时给你一个下标从0开始大小为n的整数数组people，people[i]是第i个人来看花的时间。
 * 请你返回一个大小为n的整数数组answer，其中answer[i]是第i个人到达时在花期内花的数目。
 */

type List<T> = T[];

function bisectRight(arr: number[], x: number): number {
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (x < arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function bisectLeft(arr: number[], x: number): number {
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (x <= arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function fullBloomFlowers(
  flowers: List<List<number>>,
  people: List<number>
): List<number> {
  const start = flowers.map(([a, _]) => a).sort((a, b) => a - b);
  const end = flowers.map(([_, b]) => b).sort((a, b) => a - b);

  return people.map((p) => bisectRight(start, p) - bisectLeft(end, p));
}
