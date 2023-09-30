/**
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起, 每计数至 2k 个字符，就反转这 2k 个字符中的前 k 个字符。
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 *
 * 示例:
 * 输入: s = "abcdefg", k = 2
 * 输出: "bacdfeg"
 */

function reverseStr(s: string, k: number): string {
  let left: number, right: number;
  let arr: string[] = s.split("");
  let temp: string;
  for (let i = 0, length = arr.length; i < length; i += 2 * k) {
    left = i;
    right = i + k - 1 >= length ? length - 1 : i + k - 1;
    while (left < right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr.join("");
}
