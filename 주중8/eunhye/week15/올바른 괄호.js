// 효율성 실패 코드
// 내가 봐도 안 효율적임

function solution(s) {
  let rep = s;
  let history = s;

  //rep이 0보다 클 때 while
  while (rep.length > 0) {
    // rep은 직전 상태에서 괄호 (과 )이 붙어있으면 제거
    rep = history.replace(/\({1}\){1}/g, '');
    // rep과 직전 상태의 길이가 같으면 더이상 실행되지 않아야 함
    // return
    if (history.length === rep.length) break;
    // 길이의 변화가 있으면 상태를 업데이트
    history = rep;
  }
  return rep.length === 0;
}

function solution(s) {
  if (s.length === 0) return true;
  if (s[0] === ')') return false;

  const rm = s.split('()').join('');
  if (s.length === rm.length) return false;

  return solution(rm);
}

// replace와 split은 효율성 면에서 마이너스 요소인듯 하다

function solution(s) {
  let bracket = 0;
  for (i of s) {
    // s를 돌면서 bracket에 플러스, 마이너스
    if (i === '(') bracket++;
    else bracket--;
    // 단, 마이너스가 되면 괄호가 이상한 거니까 바로 false
    if (bracket < 0) return false;
  }
  // 다 끝나고 나왔을 때, 짝이 맞아야하고 bracket이 0이어야 하니까 true, 아니면 false
  return bracket === 0;
}

// 정확성
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
// 테스트 7 〉	통과 (0.05ms, 33.5MB)
// 테스트 8 〉	통과 (0.05ms, 33.3MB)
// 테스트 9 〉	통과 (0.05ms, 33.5MB)
// 테스트 10 〉	통과 (0.05ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)
// 테스트 12 〉	통과 (0.14ms, 33.4MB)
// 테스트 13 〉	통과 (0.14ms, 33.4MB)
// 테스트 14 〉	통과 (0.14ms, 33.4MB)
// 테스트 15 〉	통과 (0.14ms, 33.4MB)
// 테스트 16 〉	통과 (0.14ms, 33.4MB)
// 테스트 17 〉	통과 (0.15ms, 33.4MB)
// 테스트 18 〉	통과 (0.14ms, 33.4MB)

// 효율성
// 테스트 1 〉	통과 (6.17ms, 38.2MB)
// 테스트 2 〉	통과 (5.73ms, 38.4MB)

// 효율성 때문에 몇 번을 다시 풀었는데 만족스럽지 못한 4점...^^
