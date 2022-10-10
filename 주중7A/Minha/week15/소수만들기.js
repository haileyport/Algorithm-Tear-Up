function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (i !== j && j !== k && i !== k)
          if (isPrime(nums[i] + nums[j] + nums[k])) answer += 1;
      }
    }
  }
  return answer;
}

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count += 1;
  }
  return count === 2 ? true : false;
}