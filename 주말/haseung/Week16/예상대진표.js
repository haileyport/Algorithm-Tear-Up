function solution(n, a, b) {
  // 다음 라운드에 진출할 참가자의 번호는 다시 1번부터 N/2번을 차례대로 배정

  // 4번 <-> 3번: 4번이 이기면 4번이 다음 라운드에서 2번
  // 7번 <-> 8번: 7번이 이기면 7번이 다음 라운드에서 4번

  //두번째 라운드
  //2번 <-> 1번, 4번 <-> 3번
  let currentRound = 1;
  const myNextNumber = (num) => Math.floor((num + 1) / 2);
  while (a !== b) {
    if (myNextNumber(a) === myNextNumber(b)) break;
    a = myNextNumber(a);
    b = myNextNumber(b);
    currentRound++;
  }
  return currentRound;
}
