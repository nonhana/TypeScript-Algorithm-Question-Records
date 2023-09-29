/**
 * 给你一个字符串数组，请你将字母异位词组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词是由重新排列源单词的所有字母得到的一个新单词。
 *
 * 示例 1:
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * 示例 2:
 * 输入: strs = [""]
 * 输出: [[""]]
 *
 * 示例 3:
 * 输入: strs = ["a"]
 * 输出: [["a"]]
 */

function groupAnagrams1(strs: string[]): string[][] {
  // 1. 定义一个 Map，用于记录每个单词的字母出现次数
  const strCountMap: Map<Record<string, number>, Array<number>> = new Map();
  // 2. 遍历每个单词，统计每个单词的字母出现次数
  // 这样子之后就存好了每个相同字母组成的单词的索引
  strs.forEach((item, index) => {
    // 这个record是用来记录每个单词的字母出现次数的,比如eat,那么record就是{e:1,a:1,t:1}
    const record: Record<string, number> = {};
    for (const char of item) {
      record[char] = (record[char] || 0) + 1;
    }
    // 3. 将字母出现次数作为 key，单词在数组中的索引作为 value，存入 Map
    let sourceList: number[] = strCountMap.get(record) || [];
    sourceList.push(index);
    strCountMap.set(record, sourceList);
  });

  let result: string[][] = [];
  // 4. 遍历 Map，将索引对应的单词存入结果数组
  // 对Map使用for...of,会遍历出每个键值对,键值对是一个数组,第一个元素是record,第二个元素是索引数组
  for (const indexList of strCountMap) {
    let temp: string[] = [];
    // indexList[0]是record,indexList[1]是索引数组
    for (const index of indexList[1]) {
      temp.push(strs[index]);
    }
    result.push(temp);
  }
  return result;
}

function groupAnagrams(strs: string[]) {
  let map: Map<string, Array<string>> = new Map();
  for (let i = 0; i < strs.length; i++) {
    // 把每个单词按照字母排序,这样子就可以把异位词变成一样的了
    let key = strs[i].split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    let arr = map.get(key) as string[];
    arr.push(strs[i]);
  }

  return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
