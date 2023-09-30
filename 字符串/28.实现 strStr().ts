/**
 * 实现 strStr() 函数。
 * 给定一个 haystack 字符串和一个 needle 字符串，
 * 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 * 如果不存在，则返回  -1。
 *
 * 示例 1: 输入: haystack = "hello", needle = "ll" 输出: 2
 * 示例 2: 输入: haystack = "aaaaa", needle = "bba" 输出: -1
 *
 * 说明: 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 */

function strStr(haystack: string, needle: string): number {
  function getNext(str: string): number[] {
    let next: number[] = [];
    let j: number = -1;
    next[0] = j;
    for (let i = 1, length = str.length; i < length; i++) {
      while (j >= 0 && str[i] !== str[j + 1]) {
        j = next[j];
      }
      if (str[i] === str[j + 1]) {
        j++;
      }
      next[i] = j;
    }
    return next;
  }
  if (needle.length === 0) return 0;
  let next: number[] = getNext(needle);
  let j: number = -1;
  for (let i = 0, length = haystack.length; i < length; i++) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j];
    }
    if (haystack[i] === needle[j + 1]) {
      if (j === needle.length - 2) {
        return i - j - 1;
      }
      j++;
    }
  }
  return -1;
}
