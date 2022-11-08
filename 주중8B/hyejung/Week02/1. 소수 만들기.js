/**
 * 통과 여부 : O
 * 시간 : 15분
 * 점수 : +6
 */

function isPrime(n) {
  for (let i = 3; i <= Math.sqrt(n); i += 2)
    if (i !== n && n % i === 0) return false;
  return true;
}

function solution(nums) {
  let count = 0;
  let tmp = new Array(3).fill(0);

  // nums에서 3개를 뽑아 조합을 구하는 알고리즘 사용
  function aux(n, s) {
    if (n === 3) {
      const sum = tmp.reduce((acc, cur) => acc + cur, 0);
      if (sum % 2 && isPrime(sum)) count++;
    } else {
      for (let i = s; i < nums.length; i++) {
        tmp[n] = nums[i];
        aux(n + 1, i + 1);
      }
    }
  }

  aux(0, 0);
  return count;
}

/*
1. 배열에서 3개의 조합을 뽑아서 더한다.
2. 소수인지 판별한다.

*/
