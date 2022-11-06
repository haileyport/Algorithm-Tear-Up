function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (i !== n && n % i === 0) return false;
  return true;
}

function solution(nums) {
  let primes = [];
  let sum;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) primes.push(sum);
      }
    }
  }

  return primes.length;
}
