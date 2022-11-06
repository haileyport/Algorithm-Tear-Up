function solution(a, b, n) {
  let result = 0;
  let now = n;
  let news = 0;
  let last = 0;
  while (now >= a) {
    news = parseInt(now / a) * b;
    last = now % a;
    result += news;
    now = last + news;
  }
  console.log(result);
  return result;
}

solution(2, 1, 20);
//5점
//15분
// 테스트 1 〉	통과 (2.23ms, 33.5MB)
// 테스트 2 〉	통과 (2.19ms, 33.5MB)
// 테스트 3 〉	통과 (2.25ms, 33.5MB)
// 테스트 4 〉	통과 (2.12ms, 33.6MB)
// 테스트 5 〉	통과 (2.12ms, 33.5MB)
// 테스트 6 〉	통과 (2.15ms, 33.5MB)
// 테스트 7 〉	통과 (2.11ms, 33.5MB)
// 테스트 8 〉	통과 (2.19ms, 33.5MB)
// 테스트 9 〉	통과 (2.22ms, 33.5MB)
// 테스트 10 〉	통과 (2.12ms, 33.5MB)
// 테스트 11 〉	통과 (2.14ms, 33.5MB)
// 테스트 12 〉	통과 (2.47ms, 33.5MB)
// 테스트 13 〉	통과 (2.16ms, 33.5MB)
// 테스트 14 〉	통과 (2.16ms, 33.5MB)
