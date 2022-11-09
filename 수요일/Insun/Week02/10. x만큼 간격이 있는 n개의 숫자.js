function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    let a = x * i;
    answer.push(a);
  }
  return answer;
}
