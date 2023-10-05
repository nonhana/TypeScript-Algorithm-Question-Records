// KMP算法辅助函数
const getNext = (str: string) => {
  let next: number[] = [];
  let j: number = -1;
  next[0] = -1;

  for (let i = 1; i < str.length; i++) {
    while (j >= 0 && str[i] !== str[j + 1]) {
      j = next[j];
    }
    if (str[i] === str[j + 1]) {
      j++;
    }
    next[i] = j;
  }

  return next;
};
// KMP算法匹配函数
const fn1 = (originStr: string, targetStr: string) => {
  let next: number[] = getNext(originStr);
  let j: number = -1;

  for (let i = 0; i < originStr.length; i++) {
    while (j >= 0 && originStr[i] !== targetStr[j + 1]) {
      j = next[j];
    }
    if (originStr[i] === targetStr[j + 1]) {
      if (j === targetStr.length - 2) {
        return i - j - 1;
      }
      j++;
    }
  }
  return -1;
};
// 反转字符串里面的单词
const fn2 = (str: string) => {
  // 工具函数
  // 1. 删除字符串里面多余的空格
  const delExtraSpace = (arr: string[]) => {
    let left: number = 0;
    let right: number = 0;

    while (right < arr.length && arr[right] === " ") {
      right++;
    }

    while (right < length) {
      if (arr[right] === " " && arr[right - 1] === " ") {
        right++;
        continue;
      }
      arr[left] = arr[right];
      left++;
      right++;
    }

    if (arr[left - 1] === " ") {
      arr.length = left - 1;
    } else {
      arr.length = left;
    }
  };

  // 2. 反转字符串
  const reverseStr = (arr: string[], start: number, end: number) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  // 3. 主函数
  let strArr: string[] = str.split("");
  delExtraSpace(strArr);
  let length = strArr.length;

  reverseStr(strArr, 0, length - 1);

  let start = 0;
  let end = 0;

  while (start < length) {
    end = start;

    while (end < length && strArr[end] !== " ") {
      end++;
    }
    reverseStr(strArr, start, end);
    start = end + 1;
  }
  return strArr.join("");
};
