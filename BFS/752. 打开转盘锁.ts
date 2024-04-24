/* 
  你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
  锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
  列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
  字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。

  示例 1:
  输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
  输出：6
  解释：
  可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
  注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
  因为当拨动到 "0102" 时这个锁就会被锁定。

  示例 2:
  输入: deadends = ["8888"], target = "0009"
  输出：1
  解释：把最后一位反向旋转一次即可 "0000" -> "0009"。

  示例 3:
  输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
  输出：-1
  解释：无法旋转到目标数字且不被锁定。
*/

/* 
  核心思路：
  一个转轮锁有四位，每一次可以对单独的一位进行上移或者下移。
  也就是说，从根节点'0000'开始，向下衍生出2 * 4 = 8种可能的节点。
  也就是说，这个问题实际上是问从一个八叉树中，找到符合结果的最小的深度

  优化思路：
  由于知道终点在哪里，所以可以采用双向BFS，从起点和终点同时开始搜索，直到两个搜索相遇
*/

// 将字符串 s[i] 向上拨动一次
const plusOne = (s: string, i: number) => {
  let arr = s.split("");
  if (arr[i] === "9") arr[i] = "0";
  else arr[i] = (parseInt(arr[i]) + 1).toString();
  return arr.join("");
};

// 将字符串 s[i] 向下拨动一次
const minusOne = (s: string, i: number) => {
  let arr = s.split("");
  if (arr[i] === "0") arr[i] = "9";
  else arr[i] = (parseInt(arr[i]) - 1).toString();
  return arr.join("");
};

function openLock(deadends: string[], target: string): number {
  const deaths = new Set(deadends); // 必须要跳过的死亡密码
  const visited = new Set(); // 记录已经穷举过的密码，防止走回头路

  let q1: Set<string> = new Set();
  let q2: Set<string> = new Set();
  // 从起点开始，启动广度优先搜索
  let step = 0; // 返回的结果

  q1.add("0000"); // 初始化根节点
  q2.add(target); // 初始化终点

  while (q1.size > 0 && q2.size > 0) {
    let temp: Set<string> = new Set(); // 用于临时存储下一层的节点

    for (let cur of q1) {
      if (deaths.has(cur)) continue;
      if (q2.has(cur)) return step;

      visited.add(cur);

      for (let j = 0; j < 4; j++) {
        let up = plusOne(cur, j);
        let down = minusOne(cur, j);

        if (!visited.has(up) && !deaths.has(up)) {
          visited.add(up);
          temp.add(up);
        }

        if (!visited.has(down) && !deaths.has(down)) {
          visited.add(down);
          temp.add(down);
        }
      }
    }
    step++;
    q1 = q2; // 交换q1和q2
    q2 = temp; // 使用新生成的temp作为下一层
  }

  return -1;
}

// test
console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202")); // 6
