function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (checkSum(i, 0, n)) answer++;
  }
  return answer;
}

function checkSum(cur, sum, n) {
  if (sum === n) return true;
  if (sum > n) return false;
  return checkSum(cur + 1, sum + cur, n);
}
