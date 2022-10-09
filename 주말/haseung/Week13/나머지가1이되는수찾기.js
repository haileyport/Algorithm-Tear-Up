function solution(n) {
  // n을 특정한 숫자로 나눴을 때 나머지가 1이면 그 특정 숫자를 알아야 함
  let answer = 1;
  while (n % answer !== 1) answer++;
  return answer;
}
