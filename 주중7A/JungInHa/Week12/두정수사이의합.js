function solution(a, b) {
  if (a === b) return a;

  let answer = 0;
  const bigger = Math.max(a, b);
  const smaller = Math.min(a, b);

  for (let i = smaller; i <= bigger; i++) {
      answer += i;
  }

  return answer;
}
