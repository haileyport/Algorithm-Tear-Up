function solution(d, budget) {
  let result = 0;
  d.sort((a, b) => a - b);
  for (const el of d) {
    if (budget < el) break;
    result++;
    budget -= el;
  }
  return result;
}

solution([1, 3, 2, 5, 4], 9);