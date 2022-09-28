function solution(n) {
  var answer = 1;
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 1) answer = i;
  }
  return answer;
}