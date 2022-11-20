function solution(n) {
  const two = n.toString(2);
  // 1개수 세기
  const oneCount = two.match(/1/g).length;
  // 정답으로 리턴할 숫자
  let next = n;

  while (true) {
    // 숫자를 하나씩 키워가면서 2진법으로 변환, 1개수 세어서 주어진 수와 1개수가 동일할 때 멈춰서 리턴
    next++;
    let newTwo = next.toString(2);
    let newCount = newTwo.match(/1/g).length;
    if (oneCount === newCount) {
      break;
    }
  }
  return next;
}

// 정확성
// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.3MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
// 테스트 7 〉	통과 (0.05ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.05ms, 33.3MB)
// 테스트 10 〉	통과 (0.05ms, 33.4MB)
// 테스트 11 〉	통과 (0.07ms, 33.4MB)
// 테스트 12 〉	통과 (0.05ms, 33.4MB)
// 테스트 13 〉	통과 (0.05ms, 33.3MB)
// 테스트 14 〉	통과 (0.05ms, 33.5MB)

// 효율성
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.3MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.1MB)
