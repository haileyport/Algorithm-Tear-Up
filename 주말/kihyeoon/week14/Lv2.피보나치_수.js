function solution(n) {
  var answer = 0;
  answer = fibonacci(n);
  return answer;
}

//재귀쓰면 시간초과
function fibonacci(n) {
  let fiboArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    fiboArr[i] = (fiboArr[i - 1] + fiboArr[i - 2]) % 1234567;
  }
  return fiboArr[n];
}
