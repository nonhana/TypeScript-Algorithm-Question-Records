const twoSum = (arr: number[], target: number): number[] => {
  let helperMap = new Map<number, number>();
  let index: number | undefined;
  let resArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    index = helperMap.get(target - arr[i]);
    if (index !== undefined) {
      resArr = [index, i];
    }
    helperMap.set(arr[i], i);
  }
  return resArr;
};

const threeSum = (nums: number[]): number[][] => {
  nums = nums.sort((a, b) => a - b);

  let length: number = nums.length;
  let left: number = 0;
  let right: number = length - 1;
  let result: number[][] = [];

  for (let i = 0; i < length; i++) {
    if (nums[i] > 0) {
      return result;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    left = i + 1;
    right = length - 1;

    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];

      if (total === 0) {
        result.push([i, left, right]);
        left++;
        right--;
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (total > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
