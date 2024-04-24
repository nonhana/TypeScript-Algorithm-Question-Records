namespace BinarySearch {
  // 一般正常二分搜索写法（左闭右闭）
  const func1 = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      }
    }

    return -1;
  };

  // 当nums中存在多个target时，寻找左边界（左闭右开）
  const func2 = (nums: number[], target: number): number => {
    let left = 0;
    let right = nums.length;

    // 结束条件是left === right
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);

      if ((nums[mid] = target)) {
        right = mid;
      } else if (nums[mid] > target) {
        right = mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      }
    }

    return left;
  };

  // test
  console.log(func2([1, 2, 2, 3], 2));
}
