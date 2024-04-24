/* 
  给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。

  示例 1:
  输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

  示例 2:
  输入: s = "bbbbb"
  输出: 1
  解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

  示例 3:
  输入: s = "pwwkew"
  输出: 3
  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。

  请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*/

function lengthOfLongestSubstring(s: string): number {
  let window: Map<string, number> = new Map();

  let left = 0;
  let right = 0;

  let len = 0;

  while (right < s.length) {
    const r = s[right];
    right++;
    window.set(r, (window.get(r) || 0) + 1);

    while (window.get(r)! > 1) {
      const l = s[left];
      left++;
      window.set(l, window.get(l)! - 1);
    }

    if (right - left > len) {
      len = right - left;
    }
  }

  return len;
}

// test
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
