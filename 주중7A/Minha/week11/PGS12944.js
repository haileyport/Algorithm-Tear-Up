function solution(n) {
  var answer = 0;
  for (let i = 2; i <= n; i++) {
    isPrime(i) ? answer += 1 : null;
  }
  return answer;
}

const isPrime = (n) => {
  if (n === 2) return true;
  else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}