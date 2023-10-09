/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 * 输入: "()"
 * 输出: true
 *
 * 示例 2:
 * 输入: "()[]{}"
 * 输出: true
 *
 * 示例 3:
 * 输入: "(]"
 * 输出: false
 *
 * 示例 4:
 * 输入: "([)]"
 * 输出: false
 *
 * 示例 5:
 * 输入: "{[]}"
 * 输出: true
 */

// 版本一：普通版
function isValid1(s: string): boolean {
  let helperStack: string[] = [];

  for (let i = 0, length = s.length; i < length; i++) {
    let x: string = s[i];
    switch (x) {
      case "(":
        helperStack.push(")");
        break;
      case "[":
        helperStack.push("]");
        break;
      case "{":
        helperStack.push("}");
        break;
      default:
        if (helperStack.pop() !== x) return false;
        break;
    }
  }
  return helperStack.length === 0;
}

// 版本二：优化版
function isValid2(s: string): boolean {
  type BracketMap = {
    [index: string]: string;
  };
  let helperStack: string[] = [];
  let bracketMap: BracketMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i of s) {
    if (bracketMap.hasOwnProperty(i)) {
      helperStack.push(bracketMap[i]);
    } else if (i !== helperStack.pop()) {
      return false;
    }
  }
  return helperStack.length === 0;
}
