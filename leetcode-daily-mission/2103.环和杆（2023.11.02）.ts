/* 
  总计有 n 个环，环的颜色可以是红、绿、蓝中的一种。这些环分别穿在 10 根编号为 0 到 9 的杆上。

  给你一个长度为 2n 的字符串 rings ，表示这 n 个环在杆上的分布。rings 中每两个字符形成一个 颜色位置对 ，用于描述每个环：

  第 i 对中的 第一个 字符表示第 i 个环的 颜色（'R'、'G'、'B'）。
  第 i 对中的 第二个 字符表示第 i 个环的 位置，也就是位于哪根杆上（'0' 到 '9'）。
  例如，"R3G2B1" 表示：共有 n == 3 个环，红色的环在编号为 3 的杆上，绿色的环在编号为 2 的杆上，蓝色的环在编号为 1 的杆上。

  找出所有集齐 全部三种颜色 环的杆，并返回这种杆的数量。

  输入：rings = "B0B6G0R6R0R6G9"
  输出：1
  解释：
  - 编号 0 的杆上有 3 个环，集齐全部颜色：红、绿、蓝。
  - 编号 6 的杆上有 3 个环，但只有红、蓝两种颜色。
  - 编号 9 的杆上只有 1 个绿色环。
  因此，集齐全部三种颜色环的杆的数目为 1 。
*/

function countPoints(rings: string): number {
  const charArr = rings.split("");
  let helperMap = new Map<number, string[]>();
  let length: number = charArr.length;
  let result: number = 0;

  for (let i = 0; i < length / 2; i++) {
    if (helperMap.get(Number(charArr[i * 2 + 1]))) {
      let originArr = helperMap.get(Number(charArr[i * 2 + 1]));
      originArr!.push(charArr[i * 2]);
    } else {
      helperMap.set(Number(charArr[i * 2 + 1]), [charArr[i * 2]]);
    }
  }

  for (const value of helperMap) {
    if (
      value[1].includes("R") &&
      value[1].includes("G") &&
      value[1].includes("B")
    ) {
      result++;
    }
  }

  return result;
}
