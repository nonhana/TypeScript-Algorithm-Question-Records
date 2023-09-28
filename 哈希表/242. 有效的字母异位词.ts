/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 */
function isAnagram(s: string, t: string): boolean {
  // 1. 若两个字符串长度不相等，直接返回 false
  if (s.length !== t.length) {
    return false;
  }

  // 2. 定义两个哈希表，分别记录字符串 s 和 t 中每个字符出现的次数
  // 在TS和JS中，定义哈希表的具体实现方式就是使用对象或者Map，也就是键值对。
  // 这里的Record，就是定义了一个键为string类型，值为number类型的对象。
  const sCharCount: Record<string, number> = {};
  const tCharCount: Record<string, number> = {};

  // 3. 统计字符串 s 中每个字符的出现次数，并记录在 sCharCount 哈希表中
  for (const char of s) {
    sCharCount[char] = (sCharCount[char] || 0) + 1;
  }

  // 4. 统计字符串 t 中每个字符的出现次数，并记录在 tCharCount 哈希表中
  for (const char of t) {
    tCharCount[char] = (tCharCount[char] || 0) + 1;
  }

  // 5. 比较两个哈希表是否相同，如果出现了不相同的，则返回 false
  for (const char in sCharCount) {
    if (sCharCount[char] !== tCharCount[char]) {
      return false;
    }
  }

  // 6. 若所有字符出现次数均相同，则返回 true
  return true;
}

// 示例测试
console.log(isAnagram("anagram", "nagaram")); // 输出: true
console.log(isAnagram("rat", "car")); // 输出: false
