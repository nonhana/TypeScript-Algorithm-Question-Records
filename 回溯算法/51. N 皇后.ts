/* 
  按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
  n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
  给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
  每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
*/

function solveNQueens(n: number): string[][] {
  const res: string[][] = []; // 返回结果
  const board = new Array(n).fill(0).map(() => new Array(n).fill(".")); // 初始化棋盘

  // 回溯核心代码，参数1：棋盘；参数2：行数
  const backtrack = (board: string[][], row: number) => {
    // 当回溯到base case时，将临时结果加到结果列表中
    if (row === board.length) {
      // 转换当前棋盘为字符串形式并存入结果数组
      const snapshot = board.map((r) => r.join("")); // 将每一行数组转换为字符串
      res.push(snapshot);
      return; // return后进行撤销选择
    }

    const length = board[row].length; // 长度实际上就是传入的n

    for (let col = 0; col < length; col++) {
      if (!isValid(board, row, col)) {
        continue;
      }
      board[row][col] = "Q";
      backtrack(board, row + 1); // 一行一行的将皇后放下
      board[row][col] = ".";
    }
  };

  // 传入棋盘、当前所在行数、当前所在列数，鉴定能否放下皇后
  const isValid = (board: string[][], row: number, col: number) => {
    const n = board.length;

    // 1. 检查列是否冲突
    for (let i = 0; i < n; i++) {
      if (board[i][col] === "Q") {
        return false;
      }
    }

    // 2. 检查右上方是否冲突
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    // 3. 检查左上方是否冲突
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    return true;
  };

  backtrack(board, 0);
  return res;
}

// 测试
console.log(solveNQueens(4)); // [['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']]
