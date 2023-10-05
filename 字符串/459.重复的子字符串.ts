/**
 * 给定一个非空的字符串，
 * 判断它是否可以由它的一个子串重复多次构成。
 * 给定的字符串只含有小写英文字母，并且长度不超过10000。
 *
 * 示例 1:
 * 输入: "abab"
 * 输出: True
 * 解释: 可由子字符串 "ab" 重复两次构成。
 *
 * 示例 2:
 * 输入: "aba"
 * 输出: False
 *
 * 示例 3:
 * 输入: "abcabcabcabc"
 * 输出: True
 * 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
 */

// KMP算法
function repeatedSubstringPattern(s: string): boolean {
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

  let next: number[] = getNext(s); // next数组
  let sLength: number = s.length; // 字符串长度
  let nextLength: number = next.length; // next数组长度
  let suffixLength: number = next[nextLength - 1] + 1; // 最长后缀长度
  if (suffixLength > 0 && sLength % (sLength - suffixLength) === 0) return true;
  return false;
}
