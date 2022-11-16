function isPrime(n) {
  for (let i = 3; i <= Math.sqrt(n); i += 2)
    if (i !== n && n % i === 0) return false;
  return true;
}

function solution(n) {
  let primeCount = 1;
  for (let i = 3; i <= n; i += 2) if (isPrime(i)) primeCount++;
  return primeCount;
}
