/**
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 * 如果可以，返回 true ；否则返回 false 。
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 * @param {string} ransomNote
 * @param {string} magazine
 * @returns {boolean}
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  const rCharCount: Record<string, number> = {};
  const mCharCount: Record<string, number> = {};

  // 统计 ransomNote 中每个字符的出现次数
  for (const char of ransomNote) {
    rCharCount[char] = (rCharCount[char] || 0) + 1;
  }

  // 统计 magazine 中每个字符的出现次数
  for (const char of magazine) {
    mCharCount[char] = (mCharCount[char] || 0) + 1;
  }

  // 检查 ransomNote 是否能由 magazine 构成
  for (const char in rCharCount) {
    // 注意这里要判断大于等于0，而不是只判断小于0
    if (mCharCount[char] === undefined || mCharCount[char] < rCharCount[char]) {
      return false;
    }
  }

  return true;
}
