// 7점
// 아스키코드 .............

function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      if (el === " ") return " ";
      let code = el.charCodeAt(0);
      if (code + n > 122 || (code + n > 90 && code <= 90)) {
        code = code + n - 26;
      } else {
        code += n;
      }
      return String.fromCharCode(code);
    })
    .join("");
}

// 추가했던 테스트 케이스
// solution('P', 15);

// 테스트 1 〉	통과 (0.08ms, 30.1MB)
// 테스트 2 〉	통과 (0.08ms, 30.1MB)
// 테스트 3 〉	통과 (0.11ms, 30.1MB)
// 테스트 4 〉	통과 (0.11ms, 30MB)
// 테스트 5 〉	통과 (0.09ms, 29.8MB)
// 테스트 6 〉	통과 (0.14ms, 30MB)
// 테스트 7 〉	통과 (0.09ms, 30MB)
// 테스트 8 〉	통과 (0.13ms, 30MB)
// 테스트 9 〉	통과 (0.13ms, 30MB)
// 테스트 10 〉	통과 (0.12ms, 30.1MB)
// 테스트 11 〉	통과 (0.11ms, 30MB)
// 테스트 12 〉	통과 (0.12ms, 30MB)
// 테스트 13 〉	통과 (3.06ms, 31.9MB)
