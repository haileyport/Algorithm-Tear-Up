function solution(n, info) {
  // n개를 잘(어떻게?) 배분
  // 10점부터 어피치가 0개 맞추면 1개 넣기?
  if (info[0] === n) return [-1];
  else {
    let answers = [];
    let answer = Array(11).fill(0);
    for (let i = 0; i < n; i++) {
      if (answer.reduce((acc, cur) => acc + cur) === n) break;
      if (info[i] === 0) answer[i] = 1;
      else {
        answer[i] = info[i] + 1;
      }
    }
    answers.push(answer);
  }

  // 합이 어피치 보다 크면

  // 그 합 중 max일때의 배열 리턴

  console.log("answers:", answers);
  // return answer;
}