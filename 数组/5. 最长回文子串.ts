/* 
  给你一个字符串 s，找到 s 中最长的回文子串。
  如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

  示例 1：
  输入：s = "babad"
  输出："bab"
  解释："aba" 同样是符合题意的答案。

  示例 2：
  输入：s = "cbbd"
  输出："bb"
*/

function palindrome(s: string, left: number, right: number) {
  while (left >= 0 && right < s.length && s[left] == s[right]) {
    left--;
    right++;
  }
  return s.substring(left + 1, right);
}

function longestPalindrome(s: string): string {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    const s1 = palindrome(s, i, i);
    const s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
}
