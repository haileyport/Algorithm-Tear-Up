function solution(a, b, n, answer = 0) {
  if (n < a) return answer;
  let quotient = parseInt(n / a);
  let remainder = n % a;
  answer += quotient * b;
  return solution(a, b, remainder + quotient * b, answer);
}
