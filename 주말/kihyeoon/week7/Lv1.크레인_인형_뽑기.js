// array의 아이템들을 돌아가며 moves에서 주어진 index에 0이 아닌 숫자가 있는지 순서대로 검사
// 만약에 0이 아닌 숫자가 들어있으면 그 숫자를 basket 배열에 추가하고 0으로 바꿈
// basket에 같은 숫자가 연속으로 들어오면 result+1

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

function solution(board, moves) {
  let result = [];
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let item = board[j][moves[i] - 1];
      if (item > 0) {
        basket.push(item);
        board[j][moves[i] - 1] = 0;
        // console.log(item)
        // console.log(board)
        pushResult();
        break;
      }
    }
  }
  function pushResult() {
    for (let i = 0; i < basket.length; i++) {
      if (basket[i] === basket[i + 1]) {
        result.push(...basket.splice(i, 2));
        break;
      }
    }
  }

  // console.log(basket);
  // console.log(board);
  return result.length;
}
