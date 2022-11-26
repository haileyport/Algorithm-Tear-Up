function solution(nums) {
  let answer = 0;
  const plusNum = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        plusNum.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  for (let n of plusNum) {
    if (isPrime(n)) answer += 1;
  }
  return answer;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}
