/* 
  给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
  换句话说，s1 的排列之一是 s2 的 子串 。

  示例 1：
  输入：s1 = "ab" s2 = "eidbaooo"
  输出：true
  解释：s2 包含 s1 的排列之一 ("ba").

  示例 2：
  输入：s1= "ab" s2 = "eidboaoo"
  输出：false
*/

function checkInclusion(s1: string, s2: string): boolean {
  let need: Map<string, number> = new Map();
  let window: Map<string, number> = new Map();

  // 初始化need
  for (let char of s1) need.set(char, (need.get(char) || 0) + 1);

  let left = 0;
  let right = 0;
  let valid = 0;

  while (right < s2.length) {
    let c = s2[right];
    right++; // 右移窗口

    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) valid++;
    }

    // 当窗口大小达到s1长度时，需要开始滑动左窗口，以维护整个窗口的长度保持在 s1.length
    while (right - left >= s1.length) {
      // 如果字符种类数符合need的要求
      if (valid === need.size) return true;

      let d = s2[left];
      left++; // 左移窗口

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--;
        window.set(d, window.get(d)! - 1);
      }
    }
  }

  return false;
}

// test
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
console.log(checkInclusion("abc", "eidbaooo")); // false
console.log(checkInclusion("abc", "eidbacooo")); // true
