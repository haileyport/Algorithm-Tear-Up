function solution(board, aloc, bloc) {
  var answer = -1;

  //최적의 움직임을 할 때 몇 번 움직일까용
  //두 캐릭터가 움직인 횟수의 합을 리턴!

  //게임 초기상태 board
  //a 위치 aloc (행,열)
  //b 위치 bloc (행,열)
  //aloc, bloc은 같을 수 있음

  //1*1이면 이동을 못하니까 그 경우부터
  if (board.length === 1 && board[0].length === 1) {
    return 0;
  }

  //if(board[i][j]) 존재하면 이동
  //i, j값은 aloc[0], aloc[1]이거나 bloc[0], bloc[1]

  //A, B가 이동하는 함수
  //board에 1이 있을 때 계속 while 돌면서 둘이 번갈아 이동
  //이동이 불가능하면 다른 케이스 살펴보고 안되면 stop

  return answer;
}

//뭘 어떻게 해야하는지 감이 잘 안 온다...
//정확성 3.3/100으로 실패
