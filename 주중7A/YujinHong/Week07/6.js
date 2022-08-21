function solution(board, moves) {
  var answer = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let current = board[j][moves[i] - 1];

      if (current !== 0) {
        if (stack[stack.length - 1] === current) {
          answer += 2;
          stack.pop();
        } else {
          stack.push(current);
        }

        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return answer;
}
