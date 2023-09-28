/**
 * 给你一个字符串数组，请你将字母异位词组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词是由重新排列源单词的所有字母得到的一个新单词。
 */
function groupAnagrams1(strs: string[]): string[][] {
  const strCountMap: Map<Record<string, number>, Array<number>> = new Map();
  strs.forEach((item, index) => {
    const record: Record<string, number> = {};
    for (const char of item) {
      record[char] = (record[char] || 0) + 1;
    }
    let sourceList: number[] = strCountMap.get(record) || [];
    sourceList.push(index);
    strCountMap.set(record, sourceList);
  });
  console.log(strCountMap);
  let result: string[][] = [];
  for (const indexList of strCountMap) {
    let temp: string[] = [];
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
