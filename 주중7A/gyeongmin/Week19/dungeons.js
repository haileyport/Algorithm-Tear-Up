function solution(k, dungeons) {
  let answer = [];
  //던전을 돌기전 초기값은 false로 세팅
  let visited = Array(dungeons.length).fill(false); //[ false, false, false ]

  function dfs(count, k) {
    answer.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      //현재 던전
      let current = dungeons[i];
    //현재던전의 최소 필요 피로도가 현재 피로도보다 작고, 방문이 true일 경우
      if (k >= current[0] && !visited[i]) {
        visited[i] = 1;
        dfs(count + 1, k - current[1]); //(탐험던전+1, 현재피로도 - 소모피로도)
        visited[i] = 0;
      }
    }
  }

  dfs(0, k); //초기값 

  return Math.max(...answer);
}
