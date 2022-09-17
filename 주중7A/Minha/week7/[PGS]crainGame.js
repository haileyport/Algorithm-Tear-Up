function solution(board, moves) {
  let answer = 0;
  let stack = [];
  let cur;
  // [0, 0, 0, 0, 0]
  // [0, 0, 1, 0, 3]
  // [0, 2, 5, 0, 1]
  // [4, 2, 4, 4, 2]
  // [3, 5, 1, 3, 1]

  // moves = [1, 5, 3, 5, 1, 2, 1, 4] 
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {

      cur = board[j][moves[i] - 1];

      if (cur !== 0) {
        stack.push(cur);
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          stack.pop();
          stack.pop();
          answer += 2;
        }
        board[j][moves[i] - 1] = 0;
        break; // 안하면 해당 column 아래로 계속 뽑는다
      }
    }

  }

  return answer;
}