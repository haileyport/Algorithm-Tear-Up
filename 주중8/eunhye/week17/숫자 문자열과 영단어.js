function solution(s) {
  //문자열 중 숫자가 아닌 것을 찾아 숫자로 변환
  let answer = 0;
  const number = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  for (key in number) {
    while (s.includes(key)) {
      s = s.replace(key, number[key]);
    }
  }
  answer = Number(s);
  return answer;
}

// 정확성 테스트
// 테스트 1 〉	통과 (0.23ms, 30MB)
// 테스트 2 〉	통과 (0.28ms, 30.1MB)
// 테스트 3 〉	통과 (0.08ms, 30.1MB)
// 테스트 4 〉	통과 (0.07ms, 30.2MB)
// 테스트 5 〉	통과 (0.11ms, 30.2MB)
// 테스트 6 〉	통과 (0.11ms, 29.9MB)
// 테스트 7 〉	통과 (0.22ms, 30.1MB)
// 테스트 8 〉	통과 (0.25ms, 30.3MB)
// 테스트 9 〉	통과 (0.31ms, 29.9MB)
// 테스트 10 〉	통과 (0.10ms, 30.2MB)
