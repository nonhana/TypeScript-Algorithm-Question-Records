/* 
  给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
  异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

  示例 1:
  输入: s = "cbaebabacd", p = "abc"
  输出: [0,6]
  解释:
  起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
  起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

  示例 2:
  输入: s = "abab", p = "ab"
  输出: [0,1,2]
  解释:
  起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
  起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
  起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
*/

function findAnagrams(s: string, p: string): number[] {
  let result: number[] = [];

  let need: Map<string, number> = new Map();
  let window: Map<string, number> = new Map();

  for (let char of p) need.set(char, (need.get(char) || 0) + 1);

  let left = 0;
  let right = 0;
  let valid = 0;

  while (right < s.length) {
    const r = s[right];
    right++;

    if (need.has(r)) {
      window.set(r, (window.get(r) || 0) + 1);
      if (window.get(r) === need.get(r)) valid++; // 当前的 r 字符满足 need 条件
    }

    while (right - left >= p.length) {
      if (valid === need.size) result.push(left); // 满足条件的字符数等于 need 的字符数，说明找到了一个异位词

      const l = s[left];
      left++;

      if (need.has(l)) {
        if (window.get(l) === need.get(l)) valid--;
        window.set(l, window.get(l)! - 1);
      }
    }
  }

  return result;
}

// test
console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
console.log(findAnagrams("abab", "ab")); // [0,1,2]
console.log(findAnagrams("baa", "aa")); // [1]
