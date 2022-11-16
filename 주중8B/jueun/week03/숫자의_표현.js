function solution(n) {
  let i = 0,
    sum = 0,
    count = 0;
  for (let i = 1; i <= n; i++) {
    sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break;
      } else if (sum > n) break;
    }
  }
  return count;
}
