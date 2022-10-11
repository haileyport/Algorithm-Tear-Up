function solution(a, b) {
  let answer = 0;
  a.forEach((n, idx) => answer += n * b[idx])
  return answer;
}
