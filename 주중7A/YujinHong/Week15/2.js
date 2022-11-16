function isPrime(sum) {
  if (sum === 2) return true;

  for (let l = 2; l <= Math.sqrt(sum); l++) {
    if (!(sum % l)) return false;
  }

  return true;
}

function solution(nums) {
  let sum = 0,
    count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];

        if (isPrime(sum)) count++;
      }
    }
  }

  return count;
}
