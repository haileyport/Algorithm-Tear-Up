function solution(board, skill) {
  var answer = 0;

  //건물 내구도를 포함한 보드판 board
  //공격/회복 스킬  skill >> [type(1공격 / 2회복), 범위 행, 범위 열, 공격력]
  //스킬 소진 후 파괴되지 않은 건물 수는?

  skill.forEach((el) => {
    for (i = el[1]; i <= el[3]; i++) {
      for (j = el[2]; j <= el[4]; j++) {
        el[0] === 1 ? (board[i][j] -= el[5]) : (board[i][j] += el[5]);
      }
    }
  });

  board.forEach((el) => {
    el = el.filter((item) => item > 0);
    answer += el.length;
  });

  //정확성은 통과했는데 효율성 테스트 실패 ㅠ

  return answer;
}

//정확성 53.8(다 통과)
//효율성 0.0 (다 실패;)
//합계 53.8/100으로 실패로 체크됨
