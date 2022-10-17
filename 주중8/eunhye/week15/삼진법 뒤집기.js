function solution(n) {
  // 삼진법 변환
  let three = n.toString(3);
  // 뒤집기~
  three = [...three].reverse().join('');
  // 리턴 시에 다시 10진법으로
  return parseInt(three, 3);
}

// 정확성
// 테스트 1 〉	통과 (0.03ms, 33.6MB)
// 테스트 2 〉	통과 (0.03ms, 33.6MB)
// 테스트 3 〉	통과 (0.03ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33.5MB)
// 테스트 7 〉	통과 (0.05ms, 33.6MB)
// 테스트 8 〉	통과 (0.03ms, 33.6MB)
// 테스트 9 〉	통과 (0.03ms, 33.4MB)
// 테스트 10 〉	통과 (0.03ms, 33.5MB)
