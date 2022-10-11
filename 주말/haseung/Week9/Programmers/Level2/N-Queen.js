//가로 세로 길이가 n인 정사각형으로 된 체스판
// 체스판 위의 n개의 퀸이 서로 공격할 수 없도록 배치

// 체스판의 가로 세로의 세로의 길이 n이 매개변수로 주어질 때, n개의 퀸이 조건에 만족하도록 배치할 수 있는 방법의 수를 return

function Nqueen(n) {
  let answer = 0;
  let queen = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    queen[0] = i; //체스판의 첫번째 세로라인 중 i칸에 퀸을 배치
    dfs(1);
  }

  //1. 퀸을 놓을 수 있는지 확인
  //2. 퀸을 놓을 수 있다면 다음 행으로 넘어가기
  //3. 퀸을 놓을 수 없다면 다음 열로 넘어가기
  //4. 마지막 행까지 퀸을 놓았다면 answer++
  //5. 마지막 행까지 퀸을 놓지 못했다면 다음 열로 넘어가기
  function dfs(row) {
    if (row === n) {
      answer++;
      return;
    }
    for (let i = 0; i < n; i++) {
      queen[row] = i;
      let flag = true;
      for (let j = 0; j < row; j++) {
        if (queen[row] === queen[j] || Math.abs(queen[row] - queen[j]) === Math.abs(row - j)) {
          flag = false;
          break;
        }
      }
      if (flag) dfs(row + 1);
    }
  }
  return answer;
}

console.log(Nqueen(4));
