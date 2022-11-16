/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.03ms, 33.5MB)
테스트 2 〉	통과 (0.15ms, 33.5MB)
테스트 3 〉	통과 (0.20ms, 33.4MB)
테스트 4 〉	통과 (0.33ms, 33.5MB)
테스트 5 〉	통과 (0.24ms, 33.5MB)
테스트 6 〉	통과 (2.14ms, 36.1MB)
테스트 7 〉	통과 (1.19ms, 35.9MB)
테스트 8 〉	통과 (1.82ms, 35.9MB)
테스트 9 〉	통과 (2.02ms, 36MB)
테스트 10 〉	통과 (49.20ms, 35.9MB)
테스트 11 〉	통과 (211.97ms, 35.9MB)
테스트 12 〉	통과 (52.32ms, 35.9MB)
효율성  테스트
테스트 1 〉	통과 (249.37ms, 35.8MB)
테스트 2 〉	통과 (238.19ms, 35.8MB)
테스트 3 〉	통과 (240.50ms, 36.3MB)
테스트 4 〉	통과 (242.15ms, 35.8MB)
채점 결과
정확성: 75.0
효율성: 25.0
합계: 100.0 / 100.0
 */

function solution(n) {
  //소수 판별하는 함수
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  // 소수 개수를 카운팅할 변수(2를 포함하여 1부터 시작한다)
  let primeCount = 1;
  // 1은 소수가 아니므로 3부터 n까지의 홀수가 소수인지 판별한다.
  for (let i = 3; i <= n; i += 2) {
    if (isPrime(i)) primeCount++; // 홀수면 count++
  }
  return primeCount;
}

//다른 사람의 풀이
function solution(n) {
  const s = new Set();
  // 소수는 2를 제외하고 모두 홀수이므로 3부터 n까지 홀수만 set에 추가
  for (let i = 3; i <= n; i += 2) {
    s.add(i);
  }
  // 2는 홀수이므로 추가
  s.add(2);

  // j는 3 이상의 홀수 (n의 제곱근까지 확인)
  for (let j = 3; j < Math.sqrt(n); j += 2) {
    // s에 k의 배수가 있는지 확인
    for (let k = j * 2; k <= n; k += j) {
      // 있다면 소수가 아니므로 삭제
      s.delete(k);
    }
  }
  return s.size;
}
