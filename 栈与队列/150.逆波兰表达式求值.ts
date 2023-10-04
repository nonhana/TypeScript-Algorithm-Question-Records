/**
 * 根据逆波兰表示法，求表达式的值。
 * 有效的运算符包括 +, -, *, /。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 *
 * 说明：
 * - 整数除法只保留整数部分。
 * - 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 *
 * 示例 1：
 * 输入: ["2", "1", "+", "3", "*"]
 * 输出: 9
 * 解释: 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
 *
 * 示例 2：
 * 输入: ["4", "13", "5", "/", "+"]
 * 输出: 6
 * 解释: 该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
 *
 * 示例 3：
 * 输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * 输出: 22
 * 解释: 该算式转化为常见的中缀算术表达式为：((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = 22
 *
 * 逆波兰表达式：是一种后缀表达式，所谓后缀就是指运算符写在后面。
 *
 * 平常使用的算式则是一种中缀表达式，如 (1 + 2) * (3 + 4)。
 *
 * 该算式的逆波兰表达式写法为 ((1 2 +) (3 4 +) *)。
 *
 * 逆波兰表达式主要有以下两个优点：
 * 1. 去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
 * 2. 适合用栈操作运算：遇到数字则入栈；遇到运算符则取出栈顶两个数字进行计算，并将结果压入栈中。
 */

// 普通版
function evalRPN1(tokens: string[]): number {
  let helperStack: number[] = [];
  let temp: number;
  let i: number = 0;
  while (i < tokens.length) {
    let t: string = tokens[i];
    switch (t) {
      case "+":
        temp = helperStack.pop()! + helperStack.pop()!;
        helperStack.push(temp);
        break;
      case "-":
        temp = helperStack.pop()!;
        temp = helperStack.pop()! - temp;
        helperStack.push(temp);
        break;
      case "*":
        temp = helperStack.pop()! * helperStack.pop()!;
        helperStack.push(temp);
        break;
      case "/":
        temp = helperStack.pop()!;
        temp = Math.trunc(helperStack.pop()! / temp);
        helperStack.push(temp);
        break;
      default:
        helperStack.push(Number(t));
        break;
    }
    i++;
  }
  return helperStack.pop()!;
}

// 优化版
function evalRPN2(tokens: string[]): number {
  const helperStack: number[] = [];
  const operatorMap: Map<string, (a: number, b: number) => number> = new Map([
    ["+", (a, b) => a + b],
    ["-", (a, b) => a - b],
    ["/", (a, b) => Math.trunc(a / b)],
    ["*", (a, b) => a * b],
  ]);
  let a: number, b: number;
  for (let t of tokens) {
    if (operatorMap.has(t)) {
      b = helperStack.pop()!;
      a = helperStack.pop()!;
      helperStack.push(operatorMap.get(t)!(a, b));
    } else {
      helperStack.push(Number(t));
    }
  }
  return helperStack.pop()!;
}
