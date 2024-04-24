/* 
  给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

  注意：
  对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
  如果 s 中存在这样的子串，我们保证它是唯一的答案。

  示例 1：
  输入：s = "ADOBECODEBANC", t = "ABC"
  输出："BANC"
  解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

  示例 2：
  输入：s = "a", t = "a"
  输出："a"
  解释：整个字符串 s 是最小覆盖子串。

  示例 3:
  输入: s = "a", t = "aa"
  输出: ""
  解释: t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。
*/

function minWindow(s: string, t: string): string {
  let need: Map<string, number> = new Map(); // need 中包含需要匹配的字符以及其对应的出现次数，相当于是一个靶子，按照这个 Map 来进行匹配
  let window: Map<string, number> = new Map(); // window 滑动窗口本体，记录窗口中满足 need 条件的字符以及其出现的次数

  // 对 target 字符串进行逐个遍历，将其加入到 need 中进行统计（初始化 need ）
  for (let i = 0; i < t.length; i++) {
    if (need.has(t[i])) {
      need.set(t[i], need.get(t[i])! + 1);
    } else {
      need.set(t[i], 1);
    }
  }

  let left = 0; // 滑动窗口左边界（闭）
  let right = 0; // 滑动窗口有边界（开）
  let valid = 0; // 目前符合的元素个数

  let start = 0; // 最小覆盖子串的起始索引
  let len = Infinity; // 最小覆盖子串的长度

  while (right < s.length) {
    let c = s[right]; // c 即将要被移入窗口
    right++; // 扩大窗口

    // 在窗口内进行数据更新
    if (need.has(c)) {
      if (window.has(c)) {
        window.set(c, window.get(c)! + 1);
      } else {
        window.set(c, 1);
      }
      if (window.get(c) === need.get(c)) valid++;
    }

    // 当窗口中的元素全部符合 need 后，判断左窗口是否需要收缩
    while (valid === need.size) {
      // 判断目前的窗口长度是否比原来的更短，更新最小覆盖子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      // d 是即将被移出窗口的字符
      let d = s[left];
      // 左边界向右移动，缩小窗口
      left++;

      // 在窗口内进行数据更新
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--;
        window.set(d, window.get(d)! - 1);
      }
    }
  }

  return len === Infinity ? "" : s.substring(start, start + len);
}

// test
const res = minWindow("ADOBECODEBANC", "ABC"); // BANC
console.log(res);
