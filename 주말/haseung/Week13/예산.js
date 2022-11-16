function solution(d, budget) {
  let answer = 0;
  let sum = 0;

  d.sort((a, b) => a - b);

  for (let item of d) {
    answer++;
    sum += item;

    if (sum > budget) answer--;
  }
  return answer;
}
