/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.12ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.14ms, 33.4MB)
테스트 6 〉	통과 (0.12ms, 33.4MB)
테스트 7 〉	통과 (0.27ms, 33.5MB)
테스트 8 〉	통과 (0.22ms, 33.4MB)
테스트 9 〉	통과 (0.22ms, 33.4MB)
테스트 10 〉	통과 (0.26ms, 33.6MB)
테스트 11 〉	통과 (0.16ms, 33.5MB)
테스트 12 〉	통과 (0.20ms, 33.5MB)
테스트 13 〉	통과 (4.77ms, 39MB)
테스트 14 〉	통과 (4.71ms, 38.9MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

//첫 번째 시도 - 런타임에러(13, 14)
// -> 재귀함수는 호출이 가능한 깊이가 정해져있는데
// 13, 14번은 테스트 케이스는 그 깊이를 초과했기 때문에
// 런타임 에러가 뜨는 것이다.
function solution(n) {
  let fibArr = [0, 1];
  const fib = (num) => {
    if (fibArr[num] !== undefined) return fibArr[num];
    fibArr[num] = (fib(num - 1) + fib(num - 2)) % 1234567;
    return fibArr[num];
  };
  return fib(n);
}

//두 번째 시도 - 통과
function solution(n) {
  let fibArr = [0, 1];
  if (n <= 1) return fibArr[n];
  for (let i = 2; i < n + 1; i++) {
    fibArr.push((fibArr[i - 2] + fibArr[i - 1]) % 1234567);
  }
  return fibArr[n];
}
