/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 *
 * 示例 1： 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

function replaceSpace(s: string): string {
  let arr: string[] = s.split("");
  let spaceNum: number = 0;
  let oldLength: number = arr.length;
  for (let i = 0; i < oldLength; i++) {
    if (arr[i] === " ") {
      spaceNum++;
    }
  }
  arr.length = oldLength + 2 * spaceNum;
  let cur: number = oldLength - 1;
  for (let i = arr.length - 1; i >= 0; i--, cur--) {
    if (arr[cur] !== " ") {
      arr[i] = arr[cur];
    } else {
      arr[i] = "0";
      arr[--i] = "2";
      arr[--i] = "%";
    }
  }
  return arr.join("");
}
