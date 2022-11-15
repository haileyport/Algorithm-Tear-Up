/* 걸린시간 분 합계 100/100 */
/* 정확성 테스트
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.15ms, 33.5MB)
테스트 3 〉	통과 (0.22ms, 33.5MB)
테스트 4 〉	통과 (0.59ms, 33.5MB)
테스트 5 〉	통과 (0.26ms, 33.5MB)
테스트 6 〉	통과 (2.13ms, 35.9MB)
테스트 7 〉	통과 (1.53ms, 35.8MB)
테스트 8 〉	통과 (1.87ms, 36MB)
테스트 9 〉	통과 (2.13ms, 35.9MB)
테스트 10 〉	통과 (47.19ms, 36MB)
테스트 11 〉	통과 (217.64ms, 35.9MB)
테스트 12 〉	통과 (53.49ms, 35.9MB)

효율성 테스트
테스트 1 〉	통과 (258.56ms, 37.1MB)
테스트 2 〉	통과 (236.09ms, 35.7MB)
테스트 3 〉	통과 (223.58ms, 35.9MB)
테스트 4 〉	통과 (239.53ms, 35.7MB)
*/
function solution(n) {
  let answer = 0;
  // 1은 소수가 아니므로 2부터 시작
    for(let i = 2; i <= n; i++){
        isPrime(i) ? answer+=1 : null;
    }
    return answer;
}

const isPrime = (n) => {
  // 2는 소수가 아님. Early return
    if(n === 2) return true;
    else {
      // n까지 전체를 반복 할 필요 없이 루트 n까지만 반복. 
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
      }
      return true; 
    }
}