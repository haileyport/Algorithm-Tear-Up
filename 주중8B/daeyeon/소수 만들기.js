/* eslint-disable */
/*
정확성  테스트
테스트 1 〉	통과 (1.14ms, 36.9MB)
테스트 2 〉	통과 (22.29ms, 36.4MB)
테스트 3 〉	통과 (0.31ms, 33.6MB)
테스트 4 〉	통과 (0.28ms, 33.5MB)
테스트 5 〉	통과 (1.62ms, 36.9MB)
테스트 6 〉	통과 (1.92ms, 37MB)
테스트 7 〉	통과 (0.20ms, 33.5MB)
테스트 8 〉	통과 (2.84ms, 37.1MB)
테스트 9 〉	통과 (0.38ms, 33.7MB)
테스트 10 〉	통과 (2.75ms, 37MB)
테스트 11 〉	통과 (0.19ms, 33.5MB)
테스트 12 〉	통과 (0.18ms, 33.4MB)
테스트 13 〉	통과 (0.19ms, 33.4MB)
테스트 14 〉	통과 (0.17ms, 33.5MB)
테스트 15 〉	통과 (0.17ms, 33.5MB)
테스트 16 〉	통과 (2.78ms, 37.2MB)
테스트 17 〉	통과 (2.33ms, 35.7MB)
테스트 18 〉	통과 (0.19ms, 33.4MB)
테스트 19 〉	통과 (0.15ms, 33.5MB)
테스트 20 〉	통과 (3.32ms, 37.1MB)
테스트 21 〉	통과 (2.99ms, 37.1MB)
테스트 22 〉	통과 (0.57ms, 33.5MB)
테스트 23 〉	통과 (0.08ms, 33.4MB)
테스트 24 〉	통과 (4.31ms, 37MB)
테스트 25 〉	통과 (2.79ms, 37.1MB)
테스트 26 〉	통과 (0.08ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
function solution(nums) {
  let count = 0;

  const recursion = (i, total, depth) => {
    console.log(total);
    
    if (depth >= 3 ){
        if(isPrime(total)) 
            count++;
    }
    else {
      for (let j = i; j < nums.length; j++) {
        recursion(j + 1, total + nums[j], depth + 1);
      }
    }
  };

  recursion(0, 0, 0);
  return count;
}

function isPrime(num) {
  let sqrt = Math.sqrt(num);
  if (sqrt >= 2 && num % 2 === 0) return false;
  else {
    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) return false;
    }
  }
  return true;
}

console.log(solution([1,2,7,6,4]));
