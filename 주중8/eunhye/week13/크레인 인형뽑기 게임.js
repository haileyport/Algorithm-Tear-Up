function solution(board, moves) {
  //인형을 집어서 사라지는 개수가 몇 개인지 구하라

  //크레인이 집은 인형
  const getList = [];
  let answer = 0;
  //보드판
  //00000
  //00103
  //02501
  //42442
  //35131

  // 크레인은 column 단위로 입력된다.
  // 1 5 3 5 1 2 1 4
  // 보드판을 column 단위로 편집하지 않고 푸는 방법이 뭐가 있을까

  moves.forEach((el) => {
    for (i = 0; i < board.length; i++) {
      const target = board[i][el - 1];
      if (target > 0) {
        //인형 있음
        if (getList[getList.length - 1] === target) {
          getList.pop();
          answer += 2;
        } else {
          getList.push(target);
        }
        board[i][el - 1] = 0;
        break;
      }
    }
  });

  return answer;
}
