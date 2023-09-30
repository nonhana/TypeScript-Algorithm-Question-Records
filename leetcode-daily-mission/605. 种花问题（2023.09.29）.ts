/**
 * 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
 * 给你一个整数数组 flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false 。
 *
 * 示例 1：
 * 输入：flowerbed = [1,0,0,0,1], n = 1
 * 输出：true
 *
 * 示例 2：
 * 输入：flowerbed = [1,0,0,0,1], n = 2
 * 输出：false
 */

// 贪心算法
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // 1. 定义一个计数器，记录可种植的花的数量
  let count = 0;
  // 2. 对花坛进行遍历
  for (let i = 0; i < flowerbed.length; i++) {
    // 3. 如果当前地块没有种植花，就判断它的前后地块是否种植了花
    if (flowerbed[i] === 0) {
      const prev = i === 0 ? 0 : flowerbed[i - 1];
      const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
      if (prev === 0 && next === 0) {
        flowerbed[i] = 1; // 在当前地块种一朵花
        count++; // 增加可种植的花的数量
      }
    }
    if (count >= n) {
      return true;
    }
  }
  return false;
}
