// 两数之和
const fn1 = (nums: number[], target: number): number[] => {
  let helperMap: Map<number, number> = new Map();
  let index: number | undefined;
  let resArr: number[] = [];

  let length = nums.length;
  for (let i = 0; i < length; i++) {
    index = helperMap.get(target - nums[i]);
    if (index !== undefined) {
      resArr = [i, index];
    }
    helperMap.set(nums[i], i);
  }
  return resArr;
};

// 三数之和
const fn2 = (nums: number[]): number[][] => {
  // 对原数组进行从小到大的排序
  nums = nums.sort((a, b) => a - b);
  // 定义变量
  let length = nums.length;
  let left: number = 0;
  let right: number = length - 1;
  let resArr: number[][] = [];

  // 遍历原数组
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      return resArr;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    left = i + 1;
    right = length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        resArr.push([i, left, right]);
        left++;
        right--;
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return resArr;
};

// 四数之和
const fn3 = (nums: number[], target: number): number[][] => {
  nums = nums.sort((a, b) => a - b);

  let first: number;
  let second: number;
  let third: number;
  let forth: number;
  let length = nums.length;
  let resArr: number[][] = [];

  for (first = 0; first < length; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    for (second = first + 1; second < length; second++) {
      if (nums[second] === nums[second - 1]) {
        continue;
      }

      third = second + 1;
      forth = length - 1;
      while (third < forth) {
        let sum = nums[first] + nums[second] + nums[third] + nums[forth];
        if (sum === target) {
          resArr.push([first, second, third, forth]);
          third++;
          forth--;
          while (nums[third] === nums[third - 1]) third++;
          while (nums[forth] === nums[forth + 1]) forth--;
        } else if (sum < target) {
          third++;
        } else {
          forth--;
        }
      }
    }
  }
  return resArr;
};
