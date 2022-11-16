/**
 * 통과 여부
 * 시간 : 15분
 * 점수 : +3
 */

function solution(nums) {
  let answer = 0;
  let length = nums.length;

  for (let i = 0; i < length - 2; i++) {
    let number = 0;
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        number = nums[i] + nums[j] + nums[k];
        if (divider(number)) answer++;
      }
    }
  }
  return answer;
}

function divider(number) {
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

/*
 function solution(nums) {
  let answer =0;
  let length = nums.length;
  
  for (let i = 0; i < length-2; i++){
      let number = 0;
      let isPrime = false;
      for (let j = i + 1; j < length-1; j++){
          for (let k = j + 1; k < length; k++) {
              number = nums[i]+nums[j]+nums[k];
              
              for (let a = 2; a*a <= number; a++){
                  isPrime = number%a===0? false:true;
              }
          }
          if(isPrime){answer++;}
      }
  }
  return answer;
}
*/

/**
 * 테스트 1 〉	통과 (2.06ms, 35.7MB)
테스트 2 〉	통과 (1.61ms, 35.6MB)
테스트 3 〉	통과 (0.36ms, 33.4MB)
테스트 4 〉	통과 (0.30ms, 33.4MB)
테스트 5 〉	통과 (1.64ms, 35.7MB)
테스트 6 〉	통과 (2.78ms, 35.8MB)
테스트 7 〉	통과 (0.23ms, 33.6MB)
테스트 8 〉	통과 (4.18ms, 35.8MB)
테스트 9 〉	통과 (0.92ms, 35.6MB)
테스트 10 〉	통과 (4.23ms, 35.8MB)
테스트 11 〉	통과 (0.18ms, 33.5MB)
테스트 12 〉	통과 (0.16ms, 33.4MB)
테스트 13 〉	통과 (0.19ms, 33.5MB)
테스트 14 〉	통과 (0.30ms, 33.4MB)
테스트 15 〉	통과 (0.20ms, 33.5MB)
테스트 16 〉	통과 (4.73ms, 36MB)
테스트 17 〉	통과 (3.36ms, 35.6MB)
테스트 18 〉	통과 (0.22ms, 33.4MB)
테스트 19 〉	통과 (0.12ms, 33.5MB)
테스트 20 〉	통과 (5.11ms, 35.9MB)
테스트 21 〉	통과 (5.63ms, 35.7MB)
테스트 22 〉	통과 (0.58ms, 33.5MB)
테스트 23 〉	통과 (0.06ms, 33.4MB)
테스트 24 〉	통과 (4.43ms, 35.8MB)
테스트 25 〉	통과 (4.41ms, 35.8MB)
테스트 26 〉	통과 (0.11ms, 33.4MB)
 */