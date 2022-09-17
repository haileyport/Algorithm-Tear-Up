function solution(n) {
  var answer = 0;
  const sqrt = Math.sqrt(n);
  answer = Number.isInteger(sqrt) ? (sqrt + 1) * (sqrt + 1) : -1;
  return answer;
}
