function solution(n) {
  const sum = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    sum[i] = (sum[i - 1] + sum[i - 2]) % 1234567;
  }
  return sum[n];
}
