function solution(board, moves) { // 15 - 10
  var answer = 0;
  let basket = [];
  
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][move] !== 0) {
        basket.push(board[j][move]);
        board[j][move] = 0;
        
        let basketIdx = basket.length - 1;
        if (basket[basketIdx] == basket[basketIdx - 1]) {
            basket.pop();
            basket.pop();
            answer += 2;
        }
        break;
      }
    }
  } 
  return answer;
}   