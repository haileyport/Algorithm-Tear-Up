function solution(array, commands) {
  let cutArr = [];
  for (let n of commands) {
    cutArr.push(array.slice(n[0] - 1, n[1]).sort((a, b) => a - b)[n[2] - 1]);
  }
  return cutArr;
}

//2점
//20분내
// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.10ms, 33.5MB)
// 테스트 3 〉	통과 (0.09ms, 33.6MB)
// 테스트 4 〉	통과 (0.09ms, 33.4MB)
// 테스트 5 〉	통과 (0.09ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.5MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
