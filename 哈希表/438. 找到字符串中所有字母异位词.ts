/**
 * 给定两个字符串s和p，找到s中所有p的异位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 异位词指由相同字母重排列形成的字符串（包括相同的字符串）。
 */

function findAnagrams_method1(s: string, p: string): number[] {
  // 1. 将字符串 p 转换为字符数组，并对字符数组进行排序。默认是按照字母表的顺序进行排序的。
  p = p.split("").sort().join("");
  // 2. 定义一个哈希表，用于存储字符串 s 中所有长度为 p.length 的子串
  let map: Map<string, number[]> = new Map();
  const length: number = p.length; // 字符串 p 的长度
  // 3. 遍历字符串 s，截取长度为 p.length 的子串，并将子串转换为字符数组，对字符数组进行排序，再转换为字符串
  for (let index = 0; index <= s.length - length; index++) {
    let str = s
      .substring(index, index + length)
      .split("")
      .sort()
      .join("");
    if (str === p) {
      if (!map.has(str)) {
        map.set(str, []);
      }
      let arr = map.get(str) as number[];
      arr.push(index);
      map.set(str, arr);
    }
  }
  return [...map.values()][0] || [];
}

function findAnagrams_method2(s: string, p: string): number[] {
  const pCounter: number[] = new Array(26).fill(0); // 记录26个英文字母的出现次数
  const sCounter: number[] = new Array(26).fill(0);
  const result: number[] = [];
  const length: number = p.length;

  // 计算字母 p 中每个字符的出现次数
  for (const char of p) {
    const charCode = char.charCodeAt(0) - "a".charCodeAt(0); // 该字母在字母表中的位置
    pCounter[charCode]++;
  }

  // 滑动窗口查找字母异位词
  for (let i = 0; i < s.length; i++) {
    if (i >= length) {
      // 缩小窗口
      const charCode = s[i - length].charCodeAt(0) - "a".charCodeAt(0);
      sCounter[charCode]--;
    }

    // 扩大窗口
    const charCode = s[i].charCodeAt(0) - "a".charCodeAt(0);
    sCounter[charCode]++;

    function compareCounters(counter1: number[], counter2: number[]): boolean {
      // 比较两个计数器数组是否相同
      for (let i = 0; i < counter1.length; i++) {
        if (counter1[i] !== counter2[i]) {
          return false;
        }
      }
      return true;
    }

    if (i >= length - 1 && compareCounters(sCounter, pCounter)) {
      // 检查窗口中的字符是否与字母 p 相同
      result.push(i - length + 1);
    }
  }

  return result;
}

console.log(findAnagrams_method2("bb", "aa"));
