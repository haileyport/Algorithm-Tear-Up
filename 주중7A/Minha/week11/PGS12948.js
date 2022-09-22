function solution(n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(i % 2 ? "박" : "수");
  }
  return answer.join('');

}