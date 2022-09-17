function solution(n, info) {
  //k점을 어피치가 a발, 라이언이 b발 맞힌 경우 더 많이 맞춘 사람이 k점을 가져감 >> 여러번 k점을 맞춰도 k점
  //점수가 동일한 경우 어피치가 점수를 가져감
  //a=b=0인 경우는 k점을 아무도 안 가져감
  //최종 점수를 계산하여 더 높은 사람(동점인 경우 어피치)이 우승
  //라이언이 가장 큰 점수 차이로 화살을 쏠 때, 어디에 맞춰야 하는지 구해라
  //경우가 여러개인 경우, 가장 낮은점수를 더 많이 맞춘 수를 구해라
  //우승할 수 없는 경우 [-1] 리턴

  //라이언이 할 수 있는 경우의 수
  //어피치가 쏜 것보다 +1하거나 안 맞추기

  //어피치보다 하나 더 맞추는 모든 경우를 가장 낮은 점수부터 구하기
  //점수차를 구해 최댓값 갱신
  //재귀!

  let maxDiff = 0; //점수차
  let ryanInfo = Array(11).fill(0); //라이언 점수판

  const shot = (apeachScore, ryanScore, count, idx, board) => {
    if (n < count) return; //화살 다 쓰면 종료인거

    if (idx > 10) {
      //점수가 10점까지니까 다 쏘았을 때 계산
      let diff = ryanScore - apeachScore; //점수차
      if (diff > maxDiff) {
        //최댓값이 갱신될 때
        board[10] = n - count; //화살 수 차감
        maxDiff = diff;
        ryanInfo = board; //최댓값을 때 점수 상황 덮어쓰기
      }
      return; //최댓값 갱신이므로 리턴
    }

    if (n > count) {
      //라이언이 포인트를 받는 경우
      let board2 = [...board]; //값 중복 방지용 새 변수 선언
      board2[10 - idx] = info[10 - idx] + 1; //라이언은 항상 어피치보다 한 발 많이 맞추어야 함
      shot(
        apeachScore,
        ryanScore + idx,
        count + info[10 - idx] + 1,
        idx + 1,
        board2
      ); //재귀
    }

    if (info[10 - idx] > 0) {
      //어피치가 포인트를 받는 경우
      shot(apeachScore + idx, ryanScore, count, idx + 1, board);
    } else {
      //둘 다 점수를 얻지 않은 경우
      shot(apeachScore, ryanScore, count, idx + 1, board);
    }
  };

  //0부터 순서대로 모든 경우의 수 탐색
  shot(0, 0, 0, 0, ryanInfo);

  if (maxDiff <= 0) return [-1];

  return ryanInfo;
}

//220829 통과한 수정본업로드
